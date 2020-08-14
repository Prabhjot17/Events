import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-template',
  templateUrl: './event-template.component.html',
  styleUrls: ['./event-template.component.css']
})
export class EventTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() event:any;
  @Output() eventClick = new EventEmitter();

  handleClickMe()
  {
    this.eventClick.emit(this.event.name);
  }
}
