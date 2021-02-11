import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Step1Controller extends Controller {
  dispoItems = [];//item de base
  includedItems = [];
  @tracked dispoItems_ = [];// ceux sélectionné ds la seconde liste
  @tracked includedItems_ = [];

  @action changeDispo(elements) { //Affecte elements à dispoItems_, action déclenchée sur le @onChange de la liste des dispoItems
    this.dispoItems_=elements;
  }

  @action changeIncluded(elements) { //Affecte elements à includedItems_, action déclenchée sur le @onChange de la liste des includedItems
    this.includedItems_=elements;
  }

  @action add(source, dest, what) { //Ajoute depuis source les éléments what à dest
    this.dispoItems_=[]; //permet de bloquer : faire des include à partir de la partie droite included
    dest.pushObjects(what);
    source.removeObjects(what);
  }

  @action remove(source, dest, what) { //Retire depuis source les éléments what et les ajoute à dest
    this.includedItems_=[];
    source.removeObjects(what);
    dest.pushObjects(what);
  }

}
