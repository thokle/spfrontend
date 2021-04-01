import {Club} from './club';
import {Shop} from './shop';

export interface Member {
  firstname;
  lastname;
  middelname;
  createdDate;
  memberUsername;
  username?;
  email;
  password;
  birthDate;
  mobil?;
  id?;
  clubs?: Club[];
  shops?: Shop[];
}
