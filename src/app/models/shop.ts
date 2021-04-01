import {Member} from './member';
import {Club} from './club';
import {ShopItem} from './shop-item';

export interface Shop {
 name;

 startyear;

shopItemSet?: ShopItem[];


 members?: Member[];

clubs?: Club[];
id?;
}
