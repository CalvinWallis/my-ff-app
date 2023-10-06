import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class ContainerComponent implements OnInit {
  @Input() autoHeight: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
