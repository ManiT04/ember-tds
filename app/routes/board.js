import abstractroute from './abstractroute';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class BoardRoute extends abstractroute {
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

  @service userAuth;

  @action logout() {
    this.userAuth.logout();
    this.transitionTo('index');
  }
}
