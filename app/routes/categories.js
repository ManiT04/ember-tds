import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CategoriesRoute extends Route {
  @service router;

  model(){
    return this.store.findAll('category');
  }

  afterModel(model){
    this.store.findAll('contact');
    if(model.length>0) { //&& this.router.currentURL == "categories"
      this.transitionTo('categories.contacts',model.get('firstObject'));
    }
   // model.getforcedId()
  }

}
