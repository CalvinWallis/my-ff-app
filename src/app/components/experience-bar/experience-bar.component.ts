import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-bar',
  templateUrl: './experience-bar.component.html',
  styleUrls: ['./experience-bar.component.scss']
})
export class ExperienceBarComponent implements OnInit {
  @Input() barType: 'experience' | 'limit' = 'experience';
  @Input() experienceLevel: string = 'xp50';
  @Input() limitLevel?: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}