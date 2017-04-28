import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { InfoService } from '../components/info/info.service';
import { EventsService } from './events.service';
import { LoadingService } from '../components/loading/loading.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

    private name = 'API';

    constructor(
        private http: Http,
        private info: InfoService,
        private router: Router,
        private events: EventsService,
        private loadingService: LoadingService) { }

    get(url: string) {

        this.loadingService.addLoadingEvent({
            context: 'API',
            name: 'Api loading',
            text: '',
            title: 'Loading...'
        });

        return new Promise((resolve, reject) => {
            this.http.get(url).toPromise().then(r => {
                this._handleResponse(r.json(), resolve, reject);
            }, e => {
                this._handleResponse(e.json(), resolve, reject);
            });
        });
    }

    post(url: string, data: Object) {
        return new Promise((resolve, reject) => {
            this.http.post(url, data).toPromise().then(rs => {
                this._handleResponse(rs.json(), resolve, reject);
            }, rj => {
                console.warn('error', rj);
            });
        });
    }

    put(url, data) {
        return new Promise((resolve, reject) => {
            this.http.put(url, data).toPromise().then(rs => {
                this._handleResponse(rs.json(), resolve, reject);
            }, rj => {
                console.warn('error', rj);
            });
        });
    }

    patch(url, data) {
        return new Promise((resolve, reject) => {
            this.http.patch(url, data).toPromise().then(rs => {
                this._handleResponse(rs.json(), resolve, reject);
            }, rj => {
                console.warn('error', rj);
            });
        });
    }

    delete(url, data) {
        return new Promise((resolve, reject) => {
            this.http.delete(url, data).toPromise().then(rs => {
                this._handleResponse(rs.json(), resolve, reject);
            }, rj => {
                console.warn('error', rj);
            });
        });
    }

    /**
       * Handles response
       * @param {Object} response
       */
    protected _handleResponse(response, resolve, reject) {
        if (response.result) {
            resolve(response.data);
        }
        else if (typeof response.result === 'undefined') {
            resolve(response);
        } else {
            this.info.notify({
                type: this.info.messageTypes.error,
                message: response.MESSAGE
            });
            if (response.STATUS_CODE === 403) {
                // Notify user about Redirecting
                this.info.notify({
                    type: this.info.messageTypes.info,
                    message: 'Redirecting to login page...'
                });

                // Fire after 5s
                setTimeout(() => {
                    // Navigate to some page
                    // this.router.navigate(['/users/login']);
                }, 5000);
            } else {
                reject(response.MESSAGE);
            }
        }
    }

}
