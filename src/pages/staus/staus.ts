import { StatusmorePage } from './../statusmore/statusmore';
import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';


/**
 * Generated class for the StausPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-staus',
  templateUrl: 'staus.html',
})
export class StausPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public pop:PopoverController) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad StausPage');
  }


popOver(){
  let popover = this.pop.create(StatusmorePage);
  popover.present();
  // alert("chatsetting");
}
}

