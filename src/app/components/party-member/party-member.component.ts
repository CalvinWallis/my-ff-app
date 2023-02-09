import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-party-member',
  templateUrl: './party-member.component.html',
  styleUrls: ['./party-member.component.scss']
})
export class PartyMemberComponent implements OnInit {
  @Input() imgSrc!: string;
  @Input() name!: string;
  @Input() level!: number;
  @Input() currentHP!: number;
  @Input() currentMP!: number;
  @Input() maxHP!: number;
  @Input() maxMP!: number;
  @Input() limitLevel!: string;
  @Input() experienceLevel!: string;
  @Input() backrow: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
