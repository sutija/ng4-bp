import { Injectable, EventEmitter } from '@angular/core';
import { Emitter } from '../../../common/interfaces/emitter';
import { LoadingInterface, LoadingInterfaceProgress } from './loading';

@Injectable()
export class LoadingService {

  loadingEvent: EventEmitter<Emitter> = new EventEmitter();
  loadingEvents: Array<LoadingInterface | LoadingInterfaceProgress> = [];

  constructor() { }

  // Adds loading status
  addLoadingEvent(loadingElement: LoadingInterface | LoadingInterfaceProgress) {
    this.loadingEvents.push(loadingElement);
    this.emit();
  }

  // Removes loading status
  removeLoadingEvent(loadingElement: LoadingInterface | LoadingInterfaceProgress) {
    this.loadingEvents.map((v, i) => {
      if (v.name === loadingElement.name && v.context === loadingElement.context) {
        this.loadingEvents.splice(i, 1);
      }
    });
    this.emit();
  }

  // Updates loading status
  updateLoadingEvent(loadingElement: LoadingInterface | LoadingInterfaceProgress) {
    this.loadingEvents.map((v, i) => {
      if (v.name === loadingElement.name && v.context === loadingElement.context) {
        v = loadingElement;
      }
    });
    this.emit();
  }

  emit() {
    this.loadingEvent.emit({ service: 'Loading', context: 'Updated', data: this.loadingEvents });
  }

  showLoader() {

  }

  hideLoader() {

  }

}

export { LoadingInterface, LoadingInterfaceProgress }
