import { Component, Input } from '@angular/core';

@Component({
  selector: 'club-list-item',
  templateUrl: 'club-list-item.html'
})
export class ClubListItem {

  @Input() club: string;

  constructor() {

  }

}
