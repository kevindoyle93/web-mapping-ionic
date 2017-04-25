import { Component, Input } from '@angular/core';
import { League } from '../../api/models/league';

@Component({
  selector: 'league-preview-card',
  templateUrl: 'league-preview-card.html'
})
export class LeaguePreviewCard {

  @Input() league: League;

  constructor() {

  }

}
