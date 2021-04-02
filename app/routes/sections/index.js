import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsIndexRoute extends Route {
  model() {
    return this.store.findAll('section', { include: 'products' });
  }

  //méthode asynchrone de suppression des produits de la section,
  //dans laquelle la suppression des produits est bloquante.
  //Cette méthode retournera une promise, dans laquelle il sera possible de supprimer la section.
  async deleteProducts(products) {
    while (products.firstObject) {
      let p = products.firstObject;
      await p.destroyRecord();
    }
  }
  @action delete(section) {
    this.deleteProducts(section.products).then(() => {
      section.destroyRecord();
    });
  }

  /*@action delete(section) { //détruit définitivement
    if(section.products.length == 0) {
      section.destroyRecord();
      this.transitionTo('sections');
    }
    else {

    }
  }*/
}
