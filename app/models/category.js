import Model, { hasMany,attr } from '@ember-data/model';

export default class CategoryModel extends Model {
  @hasMany('contact') contact;
  @attr('string') nom;
}
