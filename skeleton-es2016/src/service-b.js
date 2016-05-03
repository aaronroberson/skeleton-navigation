import {inject} from 'aurelia-framework';
import {ServiceA} from 'service-a';

@inject(ServiceA)
export class ServiceB {
  
  constructor(serviceA) {

    this.serviceA = serviceA;

    // Take a look at the httpClient object's baseUrl
    console.log(this.serviceA.httpClient);
  }
  
  list() {
    return this.serviceA.list();
  }
}
