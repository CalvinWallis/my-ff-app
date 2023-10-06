import { Component, OnInit } from '@angular/core';
import { PartyMemberComponent } from '../party-member/party-member.component';

@Component({
    selector: 'app-party',
    templateUrl: './party.component.html',
    styleUrls: ['./party.component.scss'],
    standalone: true,
    imports: [PartyMemberComponent]
})
export class PartyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
