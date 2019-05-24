import { Component } from '@angular/core';
import { treeWalk } from './antlr/tree-walk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content;

  constructor() {
    this.content = JSON.stringify(treeWalk());
  }
}
