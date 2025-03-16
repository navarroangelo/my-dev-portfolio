import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Marcel Angelo Navarro | Dev';
  menuOpen = false; // Default state is closed

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
