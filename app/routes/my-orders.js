import Route from '@ember/routing/route';
import abstractroute from './abstractroute';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class MyOrdersRoute extends abstractroute {

  @service moment;
  beforeModel() {
    this.moment.updateLocale('fr');
  }

  model() {
    let user = this.userAuth.user;
    if (user) {
      return RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetail',
        }),
        employee: user,
      });
    }
  }

}
