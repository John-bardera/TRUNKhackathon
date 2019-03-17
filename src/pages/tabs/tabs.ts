import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {SearchPage} from "../search/search";
import {SettingPage} from "../setting/setting";
import {ReservePage} from "../reserve/reserve";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = ReservePage;
  tab4Root = SettingPage;

  constructor() {

  }
}
