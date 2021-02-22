import Controller from '@ember/controller';

export default class CategoriesContactsController extends Controller {
  //Liste initiale des contacts (initialisée depuis le setupController de la route)
  /*@tracked datas; //ex : <Input @value={{@model.nom}}/>

  //Liste filtrée des contacts non supprimés
  get contacts(){
    return this.datas.filterBy('isDeleted',false);
  }
  //Liste des contacts marqués comme supprimés.
  get deleteteds(){
    return this.datas.filterBy('isDeleted',true);
  }
  //Nombre de contacts marqués comme supprimés.
  get deletetedsCount(){
    return this.deleteds.length;
  }*/
}
