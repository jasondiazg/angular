import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input, Output } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, OnDestroy, OnChanges {
  @Input() myInput: string;
  @Output() myOutput: string;

  myObject: MikeType = { name: "", age: 0 };
  myVariable: string;
  private myVar: number;
  state: string;

  constructor() { }

  ngOnInit() {
    console.log("On init example component...");
    this.myObject.name = "Mike";
    this.myObject.age = 80;
    this.myVar = 55;
    this.state = ViewState.table;

    this.myVariable = "Example component variable";
  }

  ngOnDestroy() {
    console.log("On destroy example component...");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("On changes example component...");
  }

  save() {
    // to do
    this.state = ViewState.table;
  }

  edit() {
    // to do
    this.state = ViewState.form;
  }

  delete() {
    alert("Pop up");
    console.log("pop up");

    // to do
  }

}

interface MikeType {
  name: string;
  age: number;
}

enum ViewState {
  form = 'form', table = 'table'
}