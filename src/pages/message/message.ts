import {Component, ViewChild, NgZone} from '@angular/core';
import {Content} from 'ionic-angular';

/*
  Generated class for the Message page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {
  @ViewChild('content') content: Content;
  messages:Array<any> = [];
  isLoading: boolean = false;
  previousScrollHeightMinusTop = 0;
  randomPrefix:Array<string> = ['fuck', 'bitch', 'die', 'rubbish','hahahahahahaha', 'sevencent', '======================='];
  constructor(public zone: NgZone) {
    this.loadMessages();
  }


  scrollHandler(event) {
    if(event.scrollTop === 0 && !this.isLoading) {
      this.zone.run(()=> {
        this.loadMoreMessages();
      })
    }
  }

  loadMessages() {
    setTimeout(()=> {
      let newMessages = [];
      for (let i=0; i< 20; i++) {
        newMessages.push(i);
      }
      this.messages.unshift(...newMessages);
      this.content.resize();
      // this.content.scrollToBottom(1);
      this.content.scrollTo(0, Number.MAX_SAFE_INTEGER, 1);
    }, 1000);
  }

  loadMoreMessages() {
    this.prepareForUp();
    this.isLoading = true;
    setTimeout(()=> {
      let prefix = this.randomPrefix[Math.floor(Math.random() * this.randomPrefix.length)];
      console.log(prefix);
      let newMessages = [];

      for (let i=0; i< 20; i++) {
        newMessages.push( prefix + i);
      }
      this.messages.unshift(...newMessages);
      this.isLoading = false;
      this.content.resize();
      setTimeout(()=>this.restore(), 1);
    }, 1000);
  }

  prepareForUp() {
    this.previousScrollHeightMinusTop = this.content.scrollHeight - this.content.scrollTop;
  }

  restore() {
    this.content.scrollTop = this.content.scrollHeight - this.previousScrollHeightMinusTop;
  }
}
