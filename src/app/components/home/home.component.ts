import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: '../../app.component.css',
})
export class HomeComponent {
  showScrollIndicator = true;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    // Show indicator when at top (scrollY < 50), hide when scrolling down
    this.showScrollIndicator = window.scrollY < 50;
  }
}
