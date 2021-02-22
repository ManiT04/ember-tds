import Controller from '@ember/controller';

export default class CategoriesContactsController extends Controller {
  //Liste initiale des contacts (initialisée depuis le setupController de la route)
  //@tracked datas;

  //Liste filtrée des contacts non supprimés
  get contacts(){}
  //Liste des contacts marqués comme supprimés.
  get deleteteds(){}
  //Nombre de contacts marqués comme supprimés.
  get deletetedsCount(){}
}
