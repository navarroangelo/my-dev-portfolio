import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: '../../app.component.css',
})
export class HeaderComponent {
  menuOpen = false;

  // MOBILE MENU
  toggleMenu(): void {
    console.log('Toggling the Mobile Menu');
    this.menuOpen = !this.menuOpen;
  }

  // CLOSE MOBILE MENU
  closeMenu(): void {
    this.menuOpen = false;
  }
}
