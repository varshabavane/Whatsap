import { ChatmorePage } from './../chatmore/chatmore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public pop:PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }
  chatMorePop(){
    let popover = this.pop.create(ChatmorePage);
    popover.present();
    // alert("chatsetting")
  }
}
