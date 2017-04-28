import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login-page/login-page';
import { LeaguesListPage } from '../pages/leagues-list/leagues-list';
import { LeagueDetail } from '../pages/league-detail/league-detail';
import { ClubsListPage } from '../pages/clubs-list/clubs-list';
import { ClubDetail } from '../pages/club-detail/club-detail';
import { MatchesListPage } from '../pages/matches-list/matches-list';
import { MatchDetail } from  '../pages/match-detail/match-detail';
import { RefereesListPage } from '../pages/referees-list/referees-list';
import { RefereeDetail } from '../pages/referee-detail/referee-detail';
import { TabsPage } from '../pages/tabs/tabs';

import { MatchListItem } from '../components/match-list-item/match-list-item';
import { ClubListItem } from '../components/club-list-item/club-list-item';
import { LeaguePreviewCard } from '../components/league-preview-card/league-preview-card';
import { RefereeListItem } from '../components/referee-list-item/referee-list-item';
import { LogoutPopover } from '../components/logout-popover/logout-popover';
import { ClubhouseMap } from '../components/clubhouse-map/clubhouse-map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    LeaguesListPage,
    LeagueDetail,
    ClubsListPage,
    ClubDetail,
    MatchesListPage,
    MatchDetail,
    RefereesListPage,
    RefereeDetail,
    TabsPage,
    MatchListItem,
    ClubListItem,
    LeaguePreviewCard,
    RefereeListItem,
    LogoutPopover,
    ClubhouseMap
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    LeaguesListPage,
    LeagueDetail,
    ClubsListPage,
    ClubDetail,
    MatchesListPage,
    MatchDetail,
    RefereesListPage,
    RefereeDetail,
    TabsPage,
    LogoutPopover
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
