import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class SectionsIndexEditAddProductRoute extends Route {

  model() {
    return RSVP.hash( {
      product: {},
      sections: this.store.findAll('section'),
      products: this.store.findAll('product'),
    });
  }

  @action save(data){
    let product = this.store.createRecord('product',data);
    product.save().then(() => this.transitionTo('sections.index'));
  }

}
