import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MyOrdersPrepareRoute extends Route {
  /*model() {
    let user = this.userAuth.user;
    if (user) {
      return RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetails',
        }),
        employee: user,
      });
    }
  }*/

  @service userAuth;
  model(params) {
    return this.store.findRecord('order', params.order_id, {include : 'orderdetails.product,user'} );
  }
}
