import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Output()
  public childEvent = new EventEmitter();

  @Input()
  public userName;

  demo: any;

  public details = {
    name: "Raghavarao",
    age: 45,
    message: "Come fast...."
  };

  ngOnInit() {
   }

   callParent() {
      this.childEvent.emit(this.details);
   }

}
