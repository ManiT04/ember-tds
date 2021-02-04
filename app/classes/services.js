import { computed } from '@ember/object';

export default class Services {

  services=[];
  constructor(services) {
    this.services=services;
  }

  @computed('services.@each.active')
  get countActive() { //property monService.countActive()
    return this.services.filterBy('active',true).length;
  }
  get sumActive(){
    let sum = 0;
    this.services.forEach(s=>{
      if(s.active){
        sum+=s.price;
      }
    });
    return sum;
  }



}

