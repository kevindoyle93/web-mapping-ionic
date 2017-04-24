import { Component, Input } from '@angular/core';

@Component({
  selector: 'league-preview-card',
  templateUrl: 'league-preview-card.html'
})
export class LeaguePreviewCard {

  @Input() league: string;

  constructor() {

  }

}
