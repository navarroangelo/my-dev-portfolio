import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: '../../app.component.css',
})
export class HeaderComponent {
  menuOpen = false;

  // MOBILE MENU
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
