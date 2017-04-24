import { Component, Input } from '@angular/core';

@Component({
  selector: 'referee-list-item',
  templateUrl: 'referee-list-item.html'
})
export class RefereeListItem {

  @Input() referee: string;

  constructor() {

  }

}
