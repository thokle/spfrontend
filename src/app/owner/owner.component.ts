import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../services/owner.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  fg: FormGroup;
  constructor(private  ow: OwnerService, private  fb: FormBuilder) {
    this.fg = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      middlename: [null, Validators.nullValidator],
      username: [null, Validators.required],
      email: [null, Validators.required],
      mobil: [null, Validators.required],
      birthDate: [null, Validators.required],
      password: [null, Validators.required],
      reenterpassword: [null, Validators.required],
      members: [null, Validators.nullValidator],
      licensname: [null, Validators.nullValidator]
    });
  }

  ngOnInit(): void {
  }


  createOwner(): void {
    this.ow.CreateOwner({firstname: this.fg.controls.firstname.value, lastname: this.fg.controls.lastname.value, middlename:
      this.fg.controls.middlename.value,
      birthDate: this.fg.controls.birthDate.value, email: this.fg.controls.email.value, password: this.fg.controls.password.value, ownerUsername:
      this.fg.controls.username.value , createdDate: Date.now().toString(4), license: [{name: this.fg.controls.licensname.value,
      members: this.fg.controls.members.value }]}).subscribe(value => { });

  }
}
