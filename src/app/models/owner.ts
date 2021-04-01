import {License} from './license';
import {Club} from './club';

export interface Owner {

id?;
 firstname;
lastname;
middlename;
 createdDate;
  ownerUsername;
email;
password;
  mobil?;
 birthDate;
  license?: License[];
  clubs?: Club[];
}
