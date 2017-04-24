import { Component } from '@angular/core';

import { LeaguesListPage } from '../leagues_list/leaguesList';
import { ClubsListPage } from '../clubs_list/clubsList';
import { MatchesListPage } from '../matches_list/matchesList';
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
