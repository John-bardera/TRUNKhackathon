import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { TabsPage } from "../tabs/tabs";

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
  reservationApiUrl: string = 'http://fdad11ff.ngrok.io/users/1/reservations';
  formParams: reservationApiParams;
  params: any;
  checked: boolean = false;
  almost: number;
  headers: HttpHeaders;

  public event = {
    month: '2019-01-17',
    timeStarts: '19:00',
    timeEnds: '2025-12-31'
  };

  cheap: string = "cheap";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClient,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
    this.params = this.navParams.get('params');
    this.formParams = {
      restaurant_id: this.params.$id.value,
      reserved_date: null,
      is_split: null,
      diners_num: null
    }
  }
  reservationApi() {
    this.formParams.reserved_date = this.params['更新日時'].value;
    const body = new HttpParams()
      .set('restaurant_id', this.formParams.restaurant_id)
      .set('reserved_date', this.formParams.reserved_date)
      .set('is_split', this.checked.toString())
      .set('diners_num', this.almost.toString());
    let message: string;
    let confirm = this.alertCtrl.create({
      title: '予約',
      message: '予約を決定します。本当によろしいですか？',
      buttons: [
        {
          text: 'キャンセル',
          handler: () => {
            message = 'キャンセルしました。'
            return false
          }
        },
        {
          text: '予約',
          handler: () => {
            message = '予約しました！！'
          }
        }
      ]
    });
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.httpClient.post(this.reservationApiUrl, body, { headers: this.headers }).subscribe(response => {
      confirm.present().then(_ => {
        const doneCancell = this.toastCtrl.create({
          message: message,
          duration: 4000
        });
        doneCancell.present().then(_ => {
          setTimeout(() => {
            this.navCtrl.setRoot(TabsPage, response);
          }, 3000);
        })
      });
    });
  }
}
