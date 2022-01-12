import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';
  colaborators = ['Franco', 'Juan', 'Pedro'];

  addItem = (title: string) => {
    this.colaborators.push(title);
  } 
}
