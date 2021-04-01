import {Member} from './member';
import {Child} from './child';
import {Club} from './club';

export interface Activity {
  id?;
   name;
type;
  max;

  participates;

 price;

 startDate;

 endDate;
 clubname?;

 members?: Member[];

  children?: Child[];


  club?: Club[];
}
