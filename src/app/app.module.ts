import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LeaguesListPage } from '../pages/leagues_list/leaguesList';
import { ClubsListPage } from '../pages/clubs_list/clubsList';
import { MatchesListPage } from '../pages/matches_list/matchesList';
import { RefereesListPage } from '../pages/referees-list/referees-list';
import { TabsPage } from '../pages/tabs/tabs';

import { MatchListItem } from '../components/match-list-item/match-list-item';
import { ClubListItem } from '../components/club-list-item/club-list-item';
import { LeaguePreviewCard } from '../components/league-preview-card/league-preview-card';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LeaguesListPage,
    ClubsListPage,
    MatchesListPage,
    RefereesListPage,
    TabsPage,
    MatchListItem,
    ClubListItem,
    LeaguePreviewCard
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LeaguesListPage,
    ClubsListPage,
    MatchesListPage,
    RefereesListPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
