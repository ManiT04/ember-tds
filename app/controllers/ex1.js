import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content = '';
  @tracked info = '';
  MAX = 100;

  get style() {
    if (this.size < 20) {
      return 'danger';
    }
    if (this.size < 20) {
      return 'warning';
    }
    return 'info';
  }

  get size() {
    return this.MAX - this.content.length;
  }

  @action
  save(content) {
    //this.info = 'Note sauvegardée';
    this.info = content;
  }

  @action
  update() {
    this.info = 'Note modifiée';
  }

  @action
  clear() {
    this.content = '';
    this.info = '';
  }
}
