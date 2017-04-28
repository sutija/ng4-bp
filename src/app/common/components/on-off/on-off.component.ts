import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-on-off',
  templateUrl: './on-off.component.html',
  styleUrls: ['./on-off.component.scss']
})
export class OnOffComponent implements OnInit {

  @Input('data')
  data = 0;

  @Output()
  update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleOnOff() {
    (this.data === 1) ? this.data = 0 : this.data = 1;
    this.update.emit(this.data);
  }

}
