import { Component, OnInit } from '@angular/core';
import {MemberService} from '../services/member.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SessionService} from '../services/session.service';
import {OwnerService} from '../services/owner.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  fg: FormGroup;
  selected: string;
  constructor(private  ms: MemberService, private  fb: FormBuilder, private sc: SessionService,
              private ow: OwnerService, private  ro: Router) {
    this.fg = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      owner: [null, Validators.nullValidator],
      member: [null, Validators.nullValidator],
      coach: [null, Validators.nullValidator]
    });
  }

  login(): void {
    console.log('loginin');

    const isOwner = this.selected.toString().toUpperCase() === 'owner'.toString().toUpperCase();
    const isMember = this.selected.toString().toUpperCase() === 'member'.toString().toUpperCase();
    const isCoach = this.selected.toString().toUpperCase() === 'coach'.toString().toUpperCase();

    if (isMember) {
      console.log('login member');
      this.ms.Login(this.fg.controls.username.value, this.fg.controls.password.value).subscribe(s => {
       // console.log(s.shops[0]);
        this.sc.AddClubIdToSession(s.clubs[0].id);
        this.sc .AddCvrTOSession(s.clubs[0].cvr);
        this.sc.AddUsername(s.username);
        if (s.shops !==  undefined) {
          if (s.shops.length <= 0) {
            this.sc.NumberOfShop(0);
          } else {
            this.sc.NumberOfShop(s.shops.length);
          }
        }
        this.sc.AddMemberIdToSession(s.id);
        this.ro.dispose();
        this.ro.navigate(['/memberdashboard']);
        console.log('loginin member');
      });
    } else if (isOwner) {
      console.log('login owner');
      this.ow.Login(this.fg.controls.username.value, this.fg.controls.password.value).subscribe( value => {
        this.sc.AddOwnerIdToSession(value.id);
        this.ro.dispose();
        this.ro.navigate(['/memberdashboard']);
       // this.sc.AddClubIdToSession(value.clubs[0].id);
        console.log('loginin owner' + value.id);
        this.ro.dispose();
        this.ro.navigate(['/ownerdashboard']);
      });

    }

  }

  ngOnInit(): void {
  }

}
