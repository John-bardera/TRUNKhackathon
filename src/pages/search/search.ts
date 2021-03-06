import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import {ProfilePage} from "../profile/profile";

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  value: string;
  searchApiUrl: string = 'http://fdad11ff.ngrok.io/restaurants/search';
  records: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClient
  ) {}

  ionViewDidLoad() {
  }
  searchApi() {
    this.httpClient.get(this.searchApiUrl + '?query=' + this.value).subscribe(response => {
      this.records = response['records'];
      console.log(this.records);
    })
  }
  goToDetail(record: any) {
    this.navCtrl.push(ProfilePage, { params: record });
  }
}
