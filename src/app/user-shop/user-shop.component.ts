import { Component, OnInit } from '@angular/core';
import {Member} from '../models/member';
import {SessionService} from '../services/session.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MemberService} from '../services/member.service';
import {readTsconfig} from '@angular-devkit/build-angular/src/utils/read-tsconfig';
import {Shop} from '../models/shop';
import {ShopService} from '../services/shop.service';
import {MatDialog} from '@angular/material/dialog';
import {ShopItemDialogComponent} from '../shop-item-dialog/shop-item-dialog.component';
import {ShopItem} from '../models/shop-item';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-shop',
  templateUrl: './user-shop.component.html',
  styleUrls: ['./user-shop.component.scss']
})
export class UserShopComponent implements OnInit {

  memberid = '';
  form: FormGroup;
  shop: Shop[];
  shopItem: ShopItem[];
  numberofShops = 0;
  shops: Shop[];
  selectedShop: any;
  constructor(private ms: MemberService, private  sc: SessionService, private  fb: FormBuilder, private  shs: ShopService,
              private dialog: MatDialog, private snack: MatSnackBar) {
   this.form = this.fb.group({
     name: [],
     startdate: []
   });
  }

  ngOnInit(): void {
    this.memberid = this.sc.GetSessuionByType('memberid');
    this.numberofShops = Number.parseInt(this.sc.GetSessuionByType('shops'), 0);
    if (this.numberofShops > 0 ) {
      this.shs.GetShopByUserName(this.sc.GetSessuionByType('username')).subscribe(value => {
        this.shops = value;
      });
    }
  }

  public  createShop(): void {
    this.ms.addShop({name: this.form.controls.name.value, startyear: this.form.controls.startdate.value },
      this.memberid).subscribe(value => {
        this.shs.GetShopByUserName(this.sc.GetSessuionByType('username')).subscribe(value1 => {
          this.shops = value1;
        });
    });
  }

  public addItemToShop(): void {
    this.dialog.open(ShopItemDialogComponent ).afterClosed().subscribe(value => {

      const item = value.s as ShopItem;
      const sel = value.selected as string;
      this.shs.AddItemToShop(item, sel).subscribe(value1 => {
        this.snack.open('Item add to Shop');
      }, error =>  {
        this.snack.open(error.toString());
      });
    });
  }

  loadShop(selectedShop: any): void {
    this.shs.GetShopItems(selectedShop).subscribe(value => {
      this.shopItem = value;
      console.log(value);
    });
  }
}
