import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Member} from '../models/member';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Owner} from '../models/owner';
import {CreditCard} from '../models/credit-card';
import {HasPaid} from '../models/has-paid';
import has = Reflect.has;
import {Shop} from '../models/shop';
import {tryCatch} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseUrl = environment.url;

  constructor(private  http: HttpClient) {
  }


  createMember(member: Member): Observable<any> {
    console.log('create Member' + member);
    const url = this.baseUrl + '/member/create ';
    return this.http.post(url, member).pipe();
  }


  public Login(username: string, password: string): Observable<Member> {
    try {
      console.log('username' + username + ' password ' + password);
      const url = this.baseUrl + '/member/login';
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('username', username);
      headers = headers.append('password', password);

      return this.http.get<Member>(url, { headers }).pipe();
    } catch (e) {
        console.log(e);
    }
  }

  public  addCreditCard(creaditCard: CreditCard, memberid: string): Observable<CreditCard> {
    try {
      const url = this.baseUrl + '/member/addCreditCard';
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('memberid', memberid);
      return   this.http.post<CreditCard>(url, creaditCard, {headers}).pipe();
    } catch (e){
      console.log(e);
    }
  }

  public getCreditCards(memberid: string): Observable<CreditCard[]> {
  try {
     const  url = this.baseUrl + '/member/creditcards';
     let headers: HttpHeaders = new HttpHeaders();
     headers = headers.append('memberid', memberid);
     return  this.http.get<CreditCard[]>(url, {headers}).pipe();
  } catch (e) {
     console.log(e);
  }
  }

  public  addShop(shop: Shop, memberid: any): Observable<Member> {
    try {
      const  url = this.baseUrl + '/member/addshop';
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('memberid', memberid);
      return this.http.post<Member>(url, shop, {headers } ).pipe();
    } catch (e) {
      console.log(e);
    }
}
  public memberPaid(hasPaid: HasPaid, memberid: string): Observable<HasPaid> {
    try {
      console.log(memberid);
      const url = this.baseUrl + '/member/haspaid';
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('memberid', memberid);
      return  this.http.post<HasPaid>(url, hasPaid, {headers}).pipe();
    } catch (e){
      console.log(e);
    }
  }


}

