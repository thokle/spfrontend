import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Activity} from '../models/activity';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Member} from '../models/member';
import {Club} from '../models/club';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {


  url = environment.url;
  constructor(private http: HttpClient) { }


  public  AddMemberToActivity(activityid: number, memberid: any): Observable<Activity> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('memberid', memberid);
    const acUrl = this.url + '/activity/add/' + activityid;
    return this.http.get<Activity>(acUrl, { headers}).pipe();

  }

  public GetActivityByCvr(cvr): Observable<Club> {
    const acUrl = this.url + '/activity/' + cvr;
    return this.http.get<Club>(acUrl).pipe();
  }
}
