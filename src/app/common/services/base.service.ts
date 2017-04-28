import { Injectable } from '@angular/core';
import { UrlHelperService } from './url-helper.service';
import { Order } from '../interfaces/order';
import { InfoService } from '../components/info/info.service';
import { ApiService } from './api.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseServiceClass {

    protected _NAME_: string = '';
    protected order: Order = { order_by: 'id', order_dir: 'desc' };
    protected limit: Number = 10;

    constructor(protected urlHelperService: UrlHelperService,
        protected api: ApiService,
        protected info: InfoService) { }

    init() {
        this.loadOrder();
    }

    setOrder(order: Order) {
        this.order = order;
    }

    getOrder() {
        return this.order;
    }

    setLimit(limit: Number) {
        this.limit = limit;
    }

    getLimit() {
        return this.limit;
    }

    toggleOrder(newOrderBy) {
        if (newOrderBy === this.order.order_by) {
            if (this.order.order_dir === 'desc') {
                this.order.order_dir = 'asc';
            } else {
                this.order.order_dir = 'desc';
            }
        }

        this.order.order_by = newOrderBy;
        this.saveOrder();
    }

    saveOrder() {
        localStorage.setItem(this._NAME_,
            JSON.stringify({
                order: this.order
            }));
    }

    protected loadOrder() {
        console.log('load from storage', localStorage.getItem(this._NAME_));
    }

}
