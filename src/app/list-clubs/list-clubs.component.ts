import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../services/owner.service';
import {Club} from '../models/club';

@Component({
  selector: 'app-list-clubs',
  templateUrl: './list-clubs.component.html',
  styleUrls: ['./list-clubs.component.scss']
})
export class ListClubsComponent implements OnInit {

  clubs: Club[] = [];
  constructor(private ow: OwnerService) { }

  ngOnInit(): void {
    this.ow.GetClubs().subscribe(c => {
      this.clubs = c;
    });
  }

}
