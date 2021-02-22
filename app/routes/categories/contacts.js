import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesContactsRoute extends Route {
  model(params){
    return this.store.findRecord('contacts', params.category_id);
  }

  //Initialise les données category et datas (contacts) du contrôleur à partir du contenu de model.
  setupController(controller, model){}
  //Effectue un reload du model pour recharger les données avant transition.
  willTransition(){}

  //Marque un contact comme isDeleted.
  @action delete(contact){
    return this.datas.filterBy('isDeleted',true);
  }

  //Annule la suppression des contacts marqués comme sélectionnés.
  @action cancelDeletetion(contacts){
    contacts.forEach(
      (c)=>c.rollbackAttributes()
    )
  }

  //Effectue une transition vers le contact à modifier.
  @action update(category, contact){
    this.transitionTo('categories.contacts.update',category.id,contact.id);
  }

  //Effectue la suppression définitive des contacts.
  @action confirmDeletion(contacts){
    contacts.forEach(
      (c)=>c.save()
    )
  }
}
