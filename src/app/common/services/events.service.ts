import { Injectable, EventEmitter } from '@angular/core';
import { Emitter } from '../interfaces/emitter';

@Injectable()
export class EventsService {

  public events: EventEmitter<Emitter> = new EventEmitter();

  constructor() { }

  notify(info: Emitter) {
    this.events.emit(info);
  }

}
