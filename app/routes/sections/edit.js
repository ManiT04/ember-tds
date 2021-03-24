import Route from '@ember/routing/route';

export default class SectionsEditRoute extends Route {

  model(params) { //automatiquement fait par ember car déjà préciser dans router en convention de nommage
    return this.store.find('section', params.section_id) //permet de savoir quel objet charger
  }

}
