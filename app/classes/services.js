import { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Services {

  services=[];
  promos= {}; //promo est un objet dans data
  constructor(services, promos) {
    this.services=services;
    this.promos=promos;
  }

  @computed('services.@each.active')
  get countActive() { //property monService.countActive()
    return this.services.filterBy('active',true).length;
  }

  get sumActive(){
    let services=this.services.filterBy('active', true);
    let r=0;
    services.forEach(s=>{
      r+=s.price;
    })
    return r;
  }


  @tracked codePromo;

  get promoTx(){
    return this.promos[this.codePromo] || 'Code invalide';
    //permet de récup le code et d'aller chercher le taux dans l'objet grâce aux [] qui agit comme pr un tableau
  }

  get montantPromo(){
    return this.sumActive * this.promoTx;
  }

  get montantApRemise(){
    return this.sumActive - this.montantPromo;
  }
}

