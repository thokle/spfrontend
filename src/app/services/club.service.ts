import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Activity} from '../models/activity';
import {Observable} from 'rxjs';
import {Member} from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  url = environment.url;
  constructor(private  http: HttpClient)  { }

  public  AddActivity(activity: Activity, clubid: string): Observable<any> {
    const createUrl = this.url + '/club/addactivity/' + clubid;
    return this.http.post(createUrl, activity ).pipe();
  }

  public  AddMemberToClub(memnber: Member, clubid: string): Observable<any> {
    console.log('Memner   ' + memnber);
    try {
        const addMember = this.url + '/club/addmember/' + clubid;
        return  this.http.post(addMember, memnber).pipe();

    }catch (e){
      throw  e;
    }
  }


  public GetActivites(clubid: string): Observable<Activity[]> {
    const GetActivites = this.url + '/club/getactivites/' + clubid;
    return  this.http.get<Activity[]>(GetActivites).pipe();
  }

  public GetClubMembers(name: string): Observable<Member[]> {
    try {
      const membersUrl = this.url + 'club/members/' + name;
      return  this.http.get<Member[]>(membersUrl).pipe();
    } catch (e) {
      console.log(e);
    }


  }

}
