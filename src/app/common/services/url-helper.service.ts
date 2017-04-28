import { Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable()
export class UrlHelperService {

    private mainService = new MainService();

    constructor() {

    }

    public getURL(parameters: Object): String {
        let url: String = '';
        if (this.mainService.getEnvironment() === this.mainService.getEnvironments().test) {
            url = this.getFakeUrl(parameters);
        } else {
            url = this.getRealUrl(parameters);
        }

        return url;
    }

    private getRealUrl(parameters: Object) {
        let preparedURL = this.mainService.getMainURL();
        let parametersKeys = Object.keys(parameters);

        parametersKeys.map(val => {
            preparedURL += '&'
                + val
                + '=' + parameters[val];
        });
        return preparedURL;
    }

    private getFakeUrl(parameters: Object) {
        let preparedURL = '/data/' + parameters['page'] + '_' + parameters['task'] + '.json';
        return preparedURL;
    }

}
