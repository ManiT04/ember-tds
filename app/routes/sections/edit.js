import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsEditRoute extends Route {

  model(params) { //automatiquement fait par ember car déjà préciser dans router en convention de nommage
    return this.store.find('section', params.section_id) //permet de savoir quel objet charger
  }

  @action delete(product) { //détruit définitivement
    product.destroyRecord();
    this.transitionTo('sections.index');
  }

}
