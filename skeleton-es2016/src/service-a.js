import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class ServiceA{
  
  constructor(httpClient) {
    
    this.httpClient = httpClient;

    // Take a look at the httpClient object's baseUrl
    console.log(this.httpClient);
  }

  list() {
    return this.httpClient.fetch('users')
      .then(response => response.json())
  }
}
