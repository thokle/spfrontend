import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Shop} from '../models/shop';
import {ShopItem} from '../models/shop-item';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseUrl = environment.url;
  constructor(private  http: HttpClient) { }

  public  GetShopByUserName(username: any): Observable<Shop[]> {
    const url = this.baseUrl + '/shop/byusername/' + username;
    return  this.http.get<Shop[]>(url).pipe();
}

  public AddItemToShop(s: ShopItem, id: string): Observable<ShopItem> {
    try {
    const url = this.baseUrl + '/shop/additem/' + id;
    return this.http.post<ShopItem>(url, s).pipe();
    }catch (e) {
      console.log(e);
    }
  }

  public GetShopItems(name: string): Observable<ShopItem[]>  {
    try {
      const url = this.baseUrl + '/shop/shopItems/' + name;
      return  this.http.get<ShopItem[]>(url).pipe();
    }catch (e) {
      console.log(e);
    }
  }

}
