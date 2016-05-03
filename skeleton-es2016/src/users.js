import {inject} from 'aurelia-framework';
import {ServiceB} from 'service-b';

@inject(ServiceB)
export class Users {
  heading = 'Users from ServiceB';
  users = [];

  constructor(serviceB) {
    this.serviceB = serviceB;
  }

  activate() {
    return this.serviceB.list()
      .then(users => this.users = users);
  }
}
