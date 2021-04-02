import { Component, OnInit } from '@angular/core';
import {MemberService} from '../services/member.service';
import {SessionService} from '../services/session.service';
import {FormBuilder, FormGroup} from '@angular/forms';

export  interface CardTypes{
    type;
    id;
}

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.scss']
})
export class CreditcardComponent implements OnInit {


  fg: FormGroup;
  memberid;
  selectedCard;
  cardTypes: CardTypes[] = [ {id: 0, type: 'VISA' }, {id: 1, type: 'MASTERCARD' }];
  constructor(private  ms: MemberService, private sc: SessionService, private  fb: FormBuilder) {
    this.fg = this.fb.group({
      cardnumber: [],
      endMonth: [],
      endYear: [],
      cvc: []
    });
  }

  ngOnInit(): void {
  }

  addCreaditCard(): void {
       this.ms.addCreditCard({cardnumber: this.fg.controls.cardnumber.value, cardType: this.selectedCard,
         cvc: this.fg.controls.cvc.value, endMonth: this.fg.controls.endMonth.value, endYear: this.fg.controls.endYear.value },
         this.sc.GetSessuionByType('memberid')).subscribe(value => {

               });
  }

}
