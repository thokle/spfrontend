import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }


  public  AddUsername(username: any): void {
    window.sessionStorage.setItem('username', username);
  }

  public  AddMemberIdToSession(userid: any): void {
    window.sessionStorage.setItem('memberid', userid);
  }

  public AddOwnerIdToSession(ownerid: any): void {
    window.sessionStorage.setItem('ownerid', ownerid);
  }

  public  AddCvrTOSession(cvr: any): void {
    window.sessionStorage.setItem('cvr', cvr);
  }
  public NumberOfShop(shops: any): void {
    window.sessionStorage.setItem('shops', shops);
  }

  public GetCvr(): string {
    return  window.sessionStorage.getItem('cvr');
  }

  public  AddClubIdToSession(clubid: any): void {
    window.sessionStorage.setItem('clubs', clubid);
  }
  public GetSessuionByType(type: string): string {
    return window.sessionStorage.getItem(type);
  }

  public AddClubName(name: string): void {
    return window.sessionStorage.setItem('clubname', name);
  }
}

