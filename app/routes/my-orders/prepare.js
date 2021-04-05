import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MyOrdersPrepareRoute extends Route {

  model(params) {
    return this.store.findRecord('order', params.order_id, {include : 'orderdetails.product,user'} );
  }
}
