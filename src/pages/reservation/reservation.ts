import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpParams } from "@angular/common/http";


interface reservationApiParams {
  restaurant_id: string | null;
  reserved_date: string | null;
  is_split: string | null;
  diners_num: string | null;
}
@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {
  reservationApiUrl: string = 'https://dfedeeeb.ngrok.io/users/1/reservations'
  params: reservationApiParams;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClient
  ) {
    this.params = {
      restaurant_id: null,
      reserved_date: null,
      is_split: null,
      diners_num: null
    }
  }
  ionViewDidLoad() {
  }
  reservationApi() {
    const body = new HttpParams()
      .set('restaurant_id', this.params.restaurant_id)
      .set('reserved_date', this.params.reserved_date)
      .set('is_split', this.params.is_split)
      .set('diners_num', this.params.diners_num);
    this.httpClient.post(this.reservationApiUrl, body);
  }
}
