import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Owner} from '../models/owner';
import {Observable} from 'rxjs';
import {SessionService} from './session.service';
import {Club} from '../models/club';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  baseUrl = environment.url;

  constructor(private  http: HttpClient, private  sc: SessionService) {
  }


  public CreateOwner(owner: Owner): Observable<any> {
    try {
      const url = this.baseUrl + '/owner/create';
      const httpHeader: HttpHeaders = new HttpHeaders();
      httpHeader.append( 'Content-Type', 'application/json; charset=utf-8');
      httpHeader.append('Accept', 'application/json');
      console.log(JSON.stringify(owner));
      return this.http.post(url, owner );
    } catch (e) {
      console.log(e);
    }
  }

  public Login(username: string, password: string): Observable<Owner> {
    try {
      const url = this.baseUrl + '/owner/login';
      let httpHeaders: HttpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.append('username', username);
      httpHeaders = httpHeaders.append('password', password);
      return this.http.get<Owner>(url, {headers: httpHeaders});
    }catch (e) {

    }

  }

  public AddOwnerToClub(club: Club): Observable<Owner> {
    try {
      const url = this.baseUrl + '/owner/addclub';
      let httpHeaders: HttpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.append('ownerid', this.sc.GetSessuionByType('ownerid'));
      return  this.http.post<Owner>(url, club, {headers: httpHeaders}).pipe();
    } catch (e) {
      console.log(e);
    }
  }

  public  GetClubs(): Observable<Club[]> {
    try {
      const url = this.baseUrl + '/club/allclubs';
      return  this.http.get<Club[]>(url  ).pipe();
    } catch (e) {
    console.log(e);
    }
  }




}
