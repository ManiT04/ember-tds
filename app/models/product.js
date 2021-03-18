import Model, { attr, hasMany } from '@ember-data/model';

export default class ProductModel extends Model {

  @attr('string') name;

}
