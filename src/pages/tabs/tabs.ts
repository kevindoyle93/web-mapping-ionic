import { Component } from '@angular/core';

import { ClubsListPage } from '../clubs-list/clubs-list';
import { MatchesListPage } from '../matches-list/matches-list';
import { RefereesListPage } from '../referees-list/referees-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MatchesListPage;
  tab2Root = ClubsListPage;
  tab3Root = RefereesListPage;

  constructor() {

  }
}
