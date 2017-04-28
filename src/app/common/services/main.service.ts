import { Injectable } from '@angular/core';

@Injectable()
export class MainService {

  private environments = {
    test: 'test',
    live: 'live'
  };

  private environment = this.environments.live;

  private mainURL: String = 'http://localhost:4200/rest/';

  constructor() { }

  public getMainURL() {
    return this.mainURL;
  }

  // Get available environments
  public getEnvironments() {
    return this.environments;
  }

  // Get Current environment
  public getEnvironment() {
    return this.environment;
  }

}
