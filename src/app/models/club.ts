import {Owner} from './owner';
import {Activity} from './activity';

export interface Club {
  id?;
name;
 type;
 cvr;
owner?: Owner;
  activities?: Activity[];
}
