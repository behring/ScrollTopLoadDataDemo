import { Component } from '@angular/core';
import {MessagePage} from "../message/message";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  messagePage;
  constructor() {
    this.messagePage = MessagePage;
  }
}
