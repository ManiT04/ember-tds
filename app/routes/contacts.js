import Route from '@ember/routing/route';
import MyContacts from 'tds/classes/contacts';

export default class ContactsRoute extends Route {
  model(){
    return new MyContacts(this.store.findAll('contact')); //model contact
  }
}
