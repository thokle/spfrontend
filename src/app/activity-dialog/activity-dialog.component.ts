import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Activity} from '../models/activity';
import {Payment} from '../models/payment';
import {SessionService} from '../services/session.service';
import {MemberService} from '../services/member.service';
import {CreditCard} from '../models/credit-card';

@Component({
  selector: 'app-activity-dialog',
  templateUrl: './activity-dialog.component.html',
  styleUrls: ['./activity-dialog.component.scss']
})
export class ActivityDialogComponent implements  OnInit{




creaditCards = [] = [];
list = ['test', 'test', 'test'];
creditCards: CreditCard[] = [];
  selectedValue: any;
  constructor(public  dialogRef: MatDialogRef<ActivityDialogComponent>, @Inject(MAT_DIALOG_DATA) public  data: any,
              private sc: SessionService, private  ms: MemberService) {


  }
  ngOnInit(): void {
  this.ms.getCreditCards(this.sc.GetSessuionByType('memberid')).subscribe(value => {
    this.creditCards = value;
  });



}

  onNoClick(): void {
    this.dialogRef.close({value: this.selectedValue});
  }

  chane(): void {
    console.log(this.selectedValue);
  }
}
