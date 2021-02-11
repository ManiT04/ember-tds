import Route from '@ember/routing/route';
import { datas,promos } from 'tds/data/datas';
import MesServices from 'tds/classes/services';
import { action,set } from '@ember/object';

export default class Ex2Route extends Route {
  promoView=false;

  model() {
    return new MesServices(datas,promos);
  }

  @action toggleActive(serv) {
    //serv.active = !serv.active; // pour faire un not
    set(serv, 'active',!serv.active);
  }

  @action togglePromo() {
    this.promoView=!this.promoView;
    if(!this.promoView){
      this.transitionTo('ex2');
    }
    else{
      this.transitionTo('ex2.promo');
    }
  }


}
