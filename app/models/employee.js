import Model, { attr } from '@ember-data/model';

export default class EmployeeModel extends Model {

  @attr('int') id;
  @attr('string') name;
  @attr('string') email;
  @attr('string') password;


}
