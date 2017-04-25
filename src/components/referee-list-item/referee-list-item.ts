import { Component, Input } from '@angular/core';
import { Referee } from '../../api/models/referee';

@Component({
  selector: 'referee-list-item',
  templateUrl: 'referee-list-item.html'
})
export class RefereeListItem {

  @Input() referee: Referee;

  constructor() {

  }

}
