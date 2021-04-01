import {Component, Inject, OnInit} from '@angular/core';
import {ClubService} from '../services/club.service';
import {SessionService} from '../services/session.service';
import {Member} from '../models/member';

@Component({
  selector: 'app-club-members',
  templateUrl: './club-members.component.html',
  styleUrls: ['./club-members.component.scss']
})
export class ClubMembersComponent implements OnInit {



  members: Member[] = [];

  constructor(private  cs: ClubService, private  sc: SessionService) { }

  ngOnInit(): void {
    this.cs.GetClubMembers(this.sc.GetSessuionByType('clubname')).subscribe(value => {
      this.members = value;
    });
  }

}
