import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {OwnerService} from '../services/owner.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {




  baseUrl = environment.url;
  fg: FormGroup;
  constructor(private  os: OwnerService, private  fb: FormBuilder) {
    this.fg = this.fb.group({
      name: [null, Validators.required],
      type: [null, Validators.required],
      cvr: [null, Validators.required]
    });

  }

  ngOnInit(): void {
  }

  create(): void {
    this.os.AddOwnerToClub({name: this.fg.controls.name.value, type: this.fg .controls.type.value, cvr: this.fg.controls.cvr.value})
      .subscribe(value => {});
  }
}
