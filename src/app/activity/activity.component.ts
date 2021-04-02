import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../services/activity.service';
import {SessionService} from '../services/session.service';
import {Activity} from '../models/activity';
import {ClubService} from '../services/club.service';
import {MatDialog} from '@angular/material/dialog';
import {IgxDialogComponent} from 'igniteui-angular';
import {ActivityDialogComponent} from '../activity-dialog/activity-dialog.component';
import {MemberService} from '../services/member.service';
import {Payment} from '../models/payment';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activities: Activity[] = [];
  clubid = 0;
  userid = 0;
  selectedId;
  paymnt: Payment = {email: '', activity: 1, clubId: this.clubid, currency: '', memberId: this.userid, paidDate: ''};
  alert: any;
  constructor(private  ms: MemberService, private  ac: ActivityService, private sc: SessionService,
              private cs: ClubService, private dialog: MatDialog) { }

  ngOnInit(): void {
      this.userid = Number.parseInt(this.sc.GetSessuionByType('memberid'), 0);
      this.clubid = Number.parseInt(this.sc.GetSessuionByType('clubid'), 0);
      this.ac.GetActivityByCvr(this.sc.GetCvr()).subscribe(value => {
        this.activities = value.activities;
        }
      );
  }


  AddMember(acid: number): void {
  this.ac.AddMemberToActivity(acid, this.userid).subscribe(value => {
      console.log('MemberAdded TO Activity');

  });

  }

  openDialog(id: any): void{
    this.dialog.open(ActivityDialogComponent, {data: { data: ['test', 'test1' , 'test2'] } }).afterClosed().subscribe(value => {

      console.log(value);
      console.log(id);
      this.ms.memberPaid({activityId: id, hasPaied: false, particapenId: this.userid}, '' + this.userid).subscribe(value1 => {
        console.log(value1);
       }  , error => {
        console.log(error.toString());

      });
  });
  }
}
