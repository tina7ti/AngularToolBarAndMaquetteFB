import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-exo1',
  templateUrl: './button-exo1.component.html',
  styleUrls: ['./button-exo1.component.css']
})
export class ButtonExo1Component implements OnInit {

  @Input() name : string;
  @Input() icon : string;

  @Output() buttonChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public clickButton(e)
  {
    console.log(e.target.innerText);
    this.buttonChange.emit(e.target.innerText);
  }

  ngOnInit() {
  }

}
