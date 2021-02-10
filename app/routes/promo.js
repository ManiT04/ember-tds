import Route from '@ember/routing/route';
import { datas, promos } from 'tds/data/datas';
import MesServices from 'tds/classes/services';

export default class PromoRoute extends Route {
  model() {
    return this.modelFor('ex2');
  }

}
