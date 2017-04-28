import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService, LoadingInterface, LoadingInterfaceProgress } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  providers: [LoadingService]
})
export class LoadingComponent implements OnInit, OnDestroy {

  title = 'Loading...';
  progressDescription = 'Image (1/10)';
  progress = '50%';

  loadingEvents: Array<LoadingInterface | LoadingInterfaceProgress> = [];

  constructor(protected loadingService: LoadingService) { }

  isVisible(){
    if (this.loadingEvents.length > 0) {
      return true;
    }
  }

  ngOnInit() {
    this.loadingService.loadingEvent.subscribe(data => {
      this.loadingEvents = data.data;
    });
  }

  ngOnDestroy() {
    this.loadingService.loadingEvent.unsubscribe();
  }

}
