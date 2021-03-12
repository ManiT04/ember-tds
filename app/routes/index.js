import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Employee from 'models/employee';

export default class IndexRoute extends Route {
  @service userAuth;

  @action
  login(model) {
    this.store.query("employee", { fliter: { email:model.email }}).then((data)=> {
      if(data.length){
        let user = data.firstObject;
        if(user.password === model.password) {
          this.userAuth.login(user);
          //this.transitionTo('board');
        }
      }
    });
  }
}
