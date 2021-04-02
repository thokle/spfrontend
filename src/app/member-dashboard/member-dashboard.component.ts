import { Component, OnInit } from '@angular/core';
import {ClubService} from '../services/club.service';
import {SessionService} from '../services/session.service';
import {Activity} from '../models/activity';
import {Club} from '../models/club';
import {
  ConnectedPositioningStrategy,
  HorizontalAlignment,
  ISelectionEventArgs,
  NoOpScrollStrategy,
  VerticalAlignment
} from 'igniteui-angular';

interface MemberMenu {
  name;
  routerlink;
  outlet;
}
@Component({
  selector: 'app-member-dashboard',
  templateUrl: './member-dashboard.component.html',
  styleUrls: ['./member-dashboard.component.scss']
})
export class MemberDashboardComponent implements OnInit {

  club: Club[] = [];
  activities: Activity[] = [];
  public navItems = [
    { name: 'account_circle', text: 'Avatar' },
    { name: 'error', text: 'Badge' },
    { name: 'group_work', text: 'Button Group' }
  ];

  public selected = 'Avatar';
  public items: MemberMenu[] = [{name: 'Tilføj Kreditkort', outlet: 'user', routerlink: 'addCreditCard'},
    {name: 'Tilføj Aktivitet', outlet: 'user', routerlink: 'addusertoActivity' },
    {name: 'Se Tilmeldte Aktiviteter', routerlink: 'memberActivity', outlet: 'user'},
    {name: 'Se videoer', outlet: 'user', routerlink: 'uservideo'},
    {name: 'Shop', outlet: 'user', routerlink: 'shop'}];
  public text: string;
  public overlaySettings = {
    positionStrategy: new ConnectedPositioningStrategy({
      horizontalDirection: HorizontalAlignment.Left,
      horizontalStartPoint: HorizontalAlignment.Right,
      verticalStartPoint: VerticalAlignment.Bottom
    }),
    scrollStrategy: new NoOpScrollStrategy()
  };
  outlet: any;

  public onSelection(eventArgs: ISelectionEventArgs): void {
    this.text = eventArgs.newSelection.value;
    eventArgs.cancel = true;
  }

  public navigate(item): void{
    this.selected = item.text;
  }

  constructor(private cs: ClubService, private  sc: SessionService) { }

  ngOnInit(): void {

    const res =  this.sc.GetSessuionByType('clubid');
    this.club =   JSON.parse(res) as Club[];
    this.club.forEach(value =>  {
      this.cs.GetActivites(value.id).subscribe(value1 => {
        this.activities = value1;
      });
    });
  }

}
