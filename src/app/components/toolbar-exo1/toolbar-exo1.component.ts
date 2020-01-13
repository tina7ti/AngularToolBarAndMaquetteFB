import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-exo1',
  templateUrl: './toolbar-exo1.component.html',
  styleUrls: ['./toolbar-exo1.component.css']
})
export class ToolbarExo1Component implements OnInit {

  nbrButton = [
    {
      name : "BUTTON 1",
      icon : "/assets/icons/1.png"
    },
    {
      name : "BUTTON 2",
      icon : "/assets/icons/2.png"
    },
    {
      name : "BUTTON 3",
      icon : "/assets/icons/3.png"
    },
    {
      name : "BUTTON 4",
      icon : "/assets/icons/4.png"
    },
    {
      name : "BUTTON 5",
      icon : "/assets/icons/5.png"
    }
  ];

  @Input() clicked : boolean = false;
  @Input() buttonClick :string;

  change(name : string)
  {
    this.buttonClick = name;
    this.clicked = true;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
