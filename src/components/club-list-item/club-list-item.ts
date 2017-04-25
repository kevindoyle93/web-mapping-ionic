import { Component, Input } from '@angular/core';
import { Club } from '../../api/models/club';

@Component({
  selector: 'club-list-item',
  templateUrl: 'club-list-item.html'
})
export class ClubListItem {

  @Input() club: Club;

  constructor() {

  }

}
