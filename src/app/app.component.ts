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
    if (text) {
      this.listItems.push(new ListItem(text));
      this.inputText = '';
    }
  }

  removeFromList(idx: number) {
    //remove the selected item from the listItems
    this.listItems.splice(idx, 1);
  }
}
