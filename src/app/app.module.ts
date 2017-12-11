import { CallsmorePage } from './../pages/callsmore/callsmore';
import { StatusmorePage } from './../pages/statusmore/statusmore';
import { ChatmorePage } from './../pages/chatmore/chatmore';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatsPage } from '../pages/chats/chats';
import { CaameraPage } from '../pages/caamera/caamera';
import { CallsPage } from '../pages/calls/calls';
import { StausPage } from '../pages/staus/staus';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ChatsPage,
    CaameraPage,
    CallsPage,
    StausPage,
    ChatmorePage,
    StatusmorePage,
    CallsmorePage

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsPlacement: 'top',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatsPage,
    CaameraPage,
    CallsPage,
    StausPage,
    TabsPage,ChatmorePage,
    StatusmorePage,CallsmorePage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
