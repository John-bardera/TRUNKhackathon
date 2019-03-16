import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {SearchPage} from "../search/search";
import {ReservationPage} from "../reservation/reservation";
import {SettingPage} from "../setting/setting";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = ReservationPage;
  tab4Root = SettingPage;

  constructor() {

  }
}
