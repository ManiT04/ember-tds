import Component from '@glimmer/component';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  @tracked elements = [];//elm tracké dans le hbs
  selected = [];
  id = 'id';

  constructor() { //constructeur initialise les arguments
    super(...arguments);
    this.elements = this.args.elements;
    this.selected = this.args.selected;
    this.id = this.args.identifier || 'id';
  }

  @action
  change(event) {
    let select = event.target; // select la partie ciblée
    var selectedIds = [...select.selectedOptions].map(option => option.value); //select dans <option> les value, soit value={{elm.id}} ce que le user a sélectionné
    if (this.args.onChange) { //si arg change : le nb ? l'état ?
      this.args.onChange( //filtre pour retenir uniquement ceux où id sont ceux présent dans selected id
        this.elements.filter( //filtre les selected id en fonction des id des elmt selectionné
          elm => selectedIds.filter(e => e == elm[this.id]).length > 0));
    }
  }
}
