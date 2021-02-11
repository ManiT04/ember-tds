import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class Step1Controller extends Controller {
  dispoItems = [];
  includedItems = [];
  @tracked dispoItems_ = [];
  @tracked includedItems_ = [];

  changeDispo(elements) { //Affecte elements à dispoItems_, action déclenchée sur le @onChange de la liste des dispoItems
    this.disposItems_=elements;
  }

  changeIncluded(elements) { //Affecte elements à includedItems_, action déclenchée sur le @onChange de la liste des includedItems
    this.includedItems_=elements;
  }

  add(source, dest, what) { //Ajoute depuis source les éléments what à dest

  }

  remove(source, dest, what) { //Retire depuis source les éléments what et les ajoute à dest

  }

}
