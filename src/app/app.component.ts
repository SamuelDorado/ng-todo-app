import { Component } from '@angular/core';
import { ListItem } from './models/list-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listItems: ListItem[] = [];
  inputText: string;

  addToList(text: string) {
    this.listItems.push(new ListItem(text));
    this.inputText = '';
  }
}
