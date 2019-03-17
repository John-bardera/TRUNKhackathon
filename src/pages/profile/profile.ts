import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpParams } from "@angular/common/http";
import {ReservationPage} from "../reservation/reservation";


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  params: any;
  isLoaded: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClient
  ) {
    this.params = this.navParams.get('params');
    this.isLoaded = true;
  }
  ionViewDidLoad() { }
  toGoReservation() {
    this.navCtrl.push(ReservationPage, { params: this.params });
  }
}
