import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

interface authorizationParams {
  code: string | null;
  state: string | null;
  friendship_status_changed: string | null;
  error: string | null;
  error_description: string | null;
}
//interface accessTokenParams {
//  hoge: any,
//}
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  params: authorizationParams;
  errorMessage: any;
  headers: HttpHeaders;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public httpClient: HttpClient
  ) {
    this.params = {
      code: null,
      state: null,
      friendship_status_changed: null,
      error: null,
      error_description: null
    }
  }
  ionViewDidLoad() {
    if (document.URL.indexOf('?') > 0) {
      let splitURL = document.URL.split('?');
      let splitParams = splitURL[1].split('&');
      let i: any;
      for (i in splitParams){
        let singleURLParam = splitParams[i].split('=');
        console.log(singleURLParam[0]);
        if (singleURLParam[0] === 'code'){
          this.params.code = singleURLParam[1];
        }
        if (singleURLParam[0] === 'state'){
          this.params.state = singleURLParam[1];
        }
        if (singleURLParam[0] === 'friendship_status_changed'){
          this.params.friendship_status_changed = singleURLParam[1];
        }
        if (singleURLParam[0] === 'error'){
          this.params.error = singleURLParam[1];
        }
        if (singleURLParam[0] === 'error_description'){
          this.params.error_description = singleURLParam[1];
        }
      }
      if (this.params.error !== null)
        this.errorMessage = this.params.state + ': ' + this.params.error_description;
      else this.makeAccessToken();
    }
  }
  getRandomInt() {
    return Math.floor(Math.random() * Math.floor(100))
  }
  loginLine() {
    let url: string = 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1555716218&redirect_uri=http%3A%2F%2Flocalhost%3A8100&state=' + this.getRandomInt() + '&scope=profile';
    window.open(url, '_system');
  }
  makeAccessToken() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000
    });
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //let body = `grant_type=authorization_code&code=${code}&redirect_uri=http%3A%2F%2Flocalhost%3A8100&client_id=1555716218&client_secret=767ce50ab81d99c1792be99307f4ce04`;
    loader.present();
    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', this.params.code)
      .set('redirect_uri', 'http%3A%2F%2Flocalhost%3A8100')
      .set('client_id', '1555716218')
      .set('client_secret', '767ce50ab81d99c1792be99307f4ce04');
    this.httpClient.post('https://api.line.me/oauth2/v2.1/token', body.toString(),{headers: this.headers}).subscribe(response => {
      console.log(response);
      this.navCtrl.setRoot(HomePage, response);
    });
  }
}
