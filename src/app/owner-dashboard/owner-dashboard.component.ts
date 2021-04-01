import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateActivityComponent} from '../create-activity/create-activity.component';
import {SessionService} from '../services/session.service';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.scss']
})
export class OwnerDashboardComponent implements OnInit {


  @ViewChild('createactivituy')
  creaeActivty: CreateActivityComponent;
  ownerid: any;
  constructor(private sc: SessionService) { }

  ngOnInit(): void {
    this.ownerid = this.sc.GetSessuionByType('ownerid');
  }

}
