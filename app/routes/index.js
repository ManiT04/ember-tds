import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  model(){
    return {};
  }

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
