import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ContactsUpdateRoute extends Route {
  /*model(params){ //automatiquement fait par ember car déjà préciser dans router en convention de nommage
    return this.store.find('contact',params.contact_id) //permet de savoir quel objet charger
  }*/

  renderTemplate() {
    this.render('contacts.add');
  }

  @action save(contact){
    contact.save().then(()=>{
      this.transitionTo('contacts')
    });
  }
}
