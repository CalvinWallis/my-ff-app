import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-experience-bar',
    templateUrl: './experience-bar.component.html',
    styleUrls: ['./experience-bar.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class ExperienceBarComponent implements OnInit {
  @Input() barType: 'experience' | 'limit' = 'experience';
  @Input() experienceLevel: string = 'xp50';
  @Input() limitLevel?: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}