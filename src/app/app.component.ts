import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  exo : number =0;

  loadExo(e)
  {
    this.exo = e;
  }
}
