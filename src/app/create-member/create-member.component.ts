import {Component, OnInit} from '@angular/core';
import {MemberService} from '../services/member.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClubService} from '../services/club.service';
import {Club} from '../models/club';
import {OwnerService} from '../services/owner.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {

  fg: FormGroup;
  selectedItem;
  clubs: Club[];
  constructor(private  ms: MemberService, private  fb: FormBuilder, private  ownerService: OwnerService, private  cs: ClubService) {
    this.fg = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      middlename: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, Validators.required],
      mobil: [null, Validators.required],
      birthDate: [null, Validators.required],
      password: [null, Validators.required],
      reenterpassword: [null, Validators.required],
      clubid: [null, Validators.nullValidator]
    });
    console.log('get clubs' );
    this.ownerService.GetClubs().subscribe(value => {

      this.clubs = value;
    });
  }

  ngOnInit(): void {

  }

  create(e: any): void {
    console.log('create Member' + this.fg);
    this.cs.AddMemberToClub({
      birthDate: this.fg.controls.birthDate.value, createdDate: Date.now().toString(4),
      email: this.fg.controls.email.value, firstname: this.fg.controls.firstname.value, lastname: this.fg.controls.lastname.value,
      middelname: this.fg.controls.middlename.value, password: this.fg.controls.password.value,
      memberUsername: this.fg.controls.username.value,
      mobil: this.fg.controls.mobil.value
    }, this.selectedItem).subscribe(p => {

      }, error => {

      }
    );
  }


}
