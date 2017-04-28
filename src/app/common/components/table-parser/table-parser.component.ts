import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Emitter } from '../../interfaces/emitter';
import { OnOffComponent } from '../on-off/on-off.component';

@Component({
  selector: 'app-table-parser',
  templateUrl: './table-parser.component.html',
  styleUrls: ['./table-parser.component.scss'],
  entryComponents: [OnOffComponent]
})
export class TableParserComponent implements OnInit, OnChanges {

  @Output()
  headerClickCallback: EventEmitter<any> = new EventEmitter();

  @Output()
  ItemClickCallback: EventEmitter<any> = new EventEmitter();

  @Output()
  ParamsClickCallback: EventEmitter<any> = new EventEmitter();

  @Output()
  activeChanged: EventEmitter<any> = new EventEmitter();

  @Input()
  data: Array<any> = [];

  @Input()
  fieldNames = {};

  @Input()
  showEditActions = true;

  @Input()
  visibleFieldNames = [];

  public headers: Array<any> = [];
  public tableData: Array<any> = [];
  public headerNames = {};

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.tableData = this.data;
    if (this.tableData.length > 0) {
      this.headers = Object.keys(this.tableData[0]);
    }
  }

  isVisible(value) {
    if (this.visibleFieldNames.indexOf(value) >= 0) {
      return true;
    }
  }

  headerClick(data) {
    this.headerClickCallback.emit(data);
  }

  itemClick(data) {
    this.ItemClickCallback.emit(data);
  }

  paramsClick(data) {
    this.ParamsClickCallback.emit(data);
  }

  checkOnOff(fieldName) {
    if (fieldName === 'active') {
      return true;
    }
  }

  updateActive(item) {
    this.activeChanged.emit(item);
  }

  setFieldName(fieldName): string {
    let name = fieldName;
    let keys = Object.keys(this.fieldNames);

    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === fieldName) {
        name = this.fieldNames[keys[i]];
      }
    }

    return name;
  }

}
