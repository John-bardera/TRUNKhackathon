import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

interface accessTokenParams {
  access_token: string | null;
  expires_in: number | null;
  id_token: string | null;
  refresh_token: string | null;
  scope: string | null;
  token_type: string | null;
}
interface tlApiItems {
  content: string | null;
  created_time: string | null
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shortCutMax: number = 25;
  tlApiUrl: string = 'https://dfedeeeb.ngrok.io/users/1/tl';
  items: tlApiItems;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClient
  ) { }
  shortCutContent(fullContent: string){
    return fullContent.slice(0, this.shortCutMax)
  }
  tlApi() {
    this.httpClient.get(this.tlApiUrl).subscribe(response => {

    })
  }
}
