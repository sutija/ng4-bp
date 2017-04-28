import { Component, OnInit, OnDestroy } from '@angular/core';
import { InfoService } from './info.service';
import { Message } from './info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {

  public notifications: Array<any> = [];

  constructor(protected info: InfoService) { }

  ngOnInit() {
    this.info.message.subscribe(data => {
      this.addNotification(data);
    });
  }

  ngOnDestroy() {

  }

  closeMe(notification) {
    this.removeNotification(notification);
  }

  autoRemove(notification) {
    setTimeout(() => {
      this.removeNotification(notification);
    }, 4000);
  };

  removeNotification(notification) {
    const index = this.notifications.indexOf(notification);
    if (index >= 0) {
      this.notifications.splice(index, 1);
    }
  }

  addNotification(notification: Message) {
    this.notifications.push(notification);
    this.autoRemove(notification);
  }

}
