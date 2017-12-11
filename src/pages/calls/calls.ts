import { CallsmorePage } from './../callsmore/callsmore';
import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

/**
 * Generated class for the CallsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-calls',
  templateUrl: 'calls.html',
})
export class CallsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public pop:PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallsPage');
  }
  popOver(){
    let popover = this.pop.create(CallsmorePage);
    popover.present();
    alert("chatsetting");
  }
}
