import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class MyOrdersRoute extends Route {
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
