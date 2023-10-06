import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent {

  @HostBinding('class.dark-mode') darkMode: boolean = false;

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
  }
}
