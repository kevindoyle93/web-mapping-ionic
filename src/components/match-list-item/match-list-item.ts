import { Component, Input } from '@angular/core';
import {Match} from "../../api/models/match";

@Component({
  selector: 'match-list-item',
  templateUrl: 'match-list-item.html'
})
export class MatchListItem {

  @Input() match: Match;

  constructor() {

  }

}
