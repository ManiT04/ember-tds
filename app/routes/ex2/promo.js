import Route from '@ember/routing/route';
import { datas, promos } from 'tds/data/datas';
import MesServices from 'tds/classes/services';


export default class Ex2PromoRoute extends Route {
  model() {
    return this.modelFor('ex2');
  }

  /*aftermodel(model){ //on peut aussi charger les promo après les services ou le faire en même tmps que les services dans : return new MesServices(datas,promos);
    model.promos=promos;
  }*/
}
