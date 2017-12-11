import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';

/**
 * Generated class for the CallsmorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-callsmore',
  templateUrl: 'callsmore.html',
})
export class CallsmorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public pop:PopoverController)
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallsmorePage');
  }

}
