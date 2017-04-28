import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './info';

@Injectable()
export class InfoService {

  public message: EventEmitter<any> = new EventEmitter();
  public messageTypes = {
    info: 'info',
    error: 'error',
    warning: 'warning',
    success: 'success'
  };

  constructor() { }

  notify(message: Message) {
    this.message.emit(message);
  }

}
