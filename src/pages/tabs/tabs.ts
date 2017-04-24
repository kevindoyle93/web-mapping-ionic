import { Component } from '@angular/core';

import { LeaguesListPage } from '../leagues-list/leagues-list';
import { ClubsListPage } from '../clubs-list/clubs-list';
import { MatchesListPage } from '../matches-list/matches-list';
import { RefereesListPage } from '../referees-list/referees-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MatchesListPage;
  tab2Root = LeaguesListPage;
  tab3Root = ClubsListPage;
  tab4Root = RefereesListPage;

  constructor() {

  }
}
