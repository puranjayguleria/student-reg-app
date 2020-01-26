import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    The data sent by parent is {{ parentData }}<br/>
    <input type="text" [(ngModel)]="childData">
    <button (click)="SendToParent(childData)">Send to Parent </button>
    
  `,
  styles: []
})
export class TestComponent implements OnInit {
  public childData="";
  @Input() public parentData="";
  @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  SendToParent(childData){
    this.childEvent.emit(childData);
  }

}
