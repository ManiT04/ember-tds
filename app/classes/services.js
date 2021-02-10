import { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Services {

  services=[];
  promos=[];
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


  @tracked promo='';

  get codePromo(){
    code = this.promo;
    switch (code){
      case "B22":
        return this.sumActive*0.05;
      case "AZ":
        return this.sumActive*0.01;
      case "UBOAT":
        return this.sumActive*0.02;
    }
  }

}

