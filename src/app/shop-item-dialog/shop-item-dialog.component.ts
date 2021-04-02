import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SessionService} from '../services/session.service';
import {MemberService} from '../services/member.service';
import {ShopService} from '../services/shop.service';
import {Shop} from '../models/shop';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ShopItem} from '../models/shop-item';

@Component({
  selector: 'app-shop-item-dialog',
  templateUrl: './shop-item-dialog.component.html',
  styleUrls: ['./shop-item-dialog.component.scss']
})
export class ShopItemDialogComponent implements OnInit {

  shops: Shop[] = [];
  selectedShop = '';
  formGroup: FormGroup;
  constructor(public  dialogRef: MatDialogRef<ShopItemDialogComponent>, @Inject(MAT_DIALOG_DATA) public  data: any,
              private sc: SessionService, private  s: ShopService, private  fb: FormBuilder) {
    this.formGroup = this.fb.group({
      shopid: [],
      typeItem: [],
      model: [],
      name: [],
      price: [],
      whoIsLooking: [],
      size: [],
      condition: [],
      itemInStock: [],
      pictureUrl: []
    });
  }

  ngOnInit(): void {
    this.s.GetShopByUserName(this.sc.GetSessuionByType('username')).subscribe(value => {
      this.shops = value;
      this.shops.forEach( value1 => {
        console.log(value1.id + '  ' + value1.name);
      })
    });
  }

  create(): void {
console.log('SelectedShop   ' + this.selectedShop);
    const shopItem: ShopItem = {condition: this.formGroup.controls.condition.value, itemInStock: this.formGroup.controls.itemInStock.value,
    model: this.formGroup.controls.model.value, name: this.formGroup.controls.name.value, price: this.formGroup.controls.price.value,
      size: this.formGroup.controls.size.value,
    typeItem: this.formGroup.controls.typeItem.value, pictureUrl: this.formGroup.controls.pictureUrl.value};
    this.dialogRef.close({ s: shopItem, selected: this.selectedShop});
  }
}
