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
  created_time: string | null;
  image_uri: string | null;
  restaurant_id: {
    type: string | null;
    value: string | null;
  }
  restaurant_name: string | null;
  title: string | null;
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shortCutMax: number = 100;
  tlApiUrl: string = 'https://dfedeeeb.ngrok.io/users/1/tl';
  items: tlApiItems[];
  isLoaded: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpClient: HttpClient
  ) {
    this.tlApi();
  }
  shortCutContent(fullContent: string){
    return fullContent.slice(0, this.shortCutMax)
  }
  tlApi() {
    this.httpClient.get(this.tlApiUrl).subscribe(response => {
      this.items = new Array<tlApiItems>(Object.keys(response).length);
      Object.keys(response).forEach(index => {
        this.items[index] = {
          content: response[index].content,
          created_time: response[index].created_time,
          image_uri: response[index].image_uri,
          restaurant_id: {
            type: response[index].restaurant_id.type,
            value: response[index].restaurant_id.value,
          },
          restaurant_name: response[index].restaurant_name,
          title: response[index].title,
        };
      });
      console.log(this.items);
      this.isLoaded = true;
    })
  }
  goToDetail(item: tlApiItems) {
    //this.navCtrl.push()
    console.log("hoge");
  }
}
