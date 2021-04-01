import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SessionService} from '../services/session.service';
import {ClubService} from '../services/club.service';
import {Club} from '../models/club';
import {OwnerService} from '../services/owner.service';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss']
})
export class CreateActivityComponent implements OnInit {


clubs: Club[] = [];
selected;
  fgg: FormGroup = null;
  constructor(protected  sc: SessionService , private  fb: FormBuilder, private  cs: ClubService, private  ow: OwnerService) {
    this.fgg = this.fb.group({
      clubid: [],
      name: [],
      type: [],
      max: [],
      participates: [],
      price: [],
      startDate: [],

      endDate: []
    });

  }

  ngOnInit(): void {
    this.ow.GetClubs().subscribe(value => {
        this.clubs = value;
    });
  }

  public CreateActivity(): void {
    this.cs.AddActivity({endDate: this.fgg.controls.endDate.value, max: this.fgg.controls.max.value, name: this.fgg.controls.name.value,
        participates: this.fgg.controls.participates.value,
      price: this.fgg.controls.price.value, startDate: this.fgg.controls.startDate.value, type: this.fgg.controls.type.value },
     this.fgg.controls.clubid.value).subscribe(value => {
        console.log(value);
    });
  }

}
