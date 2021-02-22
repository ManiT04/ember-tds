import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class TestnewRoute extends Route {
  model(){
    return {}; //return un objet javascript
  }

  @action save(data) {
    let contact = this.store.createRecord('contact', data);
    contact.save().then(()=>this.transitionTo('testlist'));
  }
}