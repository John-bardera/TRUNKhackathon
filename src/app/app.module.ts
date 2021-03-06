import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from "../pages/search/search";
import { ReservationPage } from "../pages/reservation/reservation";
import { SettingPage } from "../pages/setting/setting";
import {LoginPage} from "../pages/login/login";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ProfilePage} from "../pages/profile/profile";
import {ReservePage} from "../pages/reserve/reserve";
import {PostPage} from "../pages/post/post";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    ReservationPage,
    SettingPage,
    LoginPage,
    ProfilePage,
    ReservePage,
    PostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    ReservationPage,
    SettingPage,
    LoginPage,
    ProfilePage,
    ReservePage,
    PostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient
  ]
})
export class AppModule {}
