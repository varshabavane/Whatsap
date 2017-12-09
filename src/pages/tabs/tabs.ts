import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {}
import { CaameraPage } from '../caamera/caamera';
import { StausPage } from '../staus/staus';
import { CallsPage } from '../calls/calls';
import { ChatsPage } from '../chats/chats';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = CaameraPage;
  tab2Root = ChatsPage
  tab3Root = StausPage;
  tab4Root = CallsPage;
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
