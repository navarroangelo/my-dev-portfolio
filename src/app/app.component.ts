import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Marcel Angelo Navarro | Dev';
  menuOpen = false;

  // MOBILE MENU
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // HOVER CARD
  toggleHoverCard(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    if (target.classList.contains('active')) {
      target.classList.remove('active');
    } else {
      document.querySelectorAll('.hover-card').forEach((card) => {
        card.classList.remove('active');
      });
      target.classList.add('active');
    }
  }

  // TESTIMONIAL CARD
  toggleTestimonialCard(event: Event) {
    const target = event.currentTarget as HTMLElement;

    document.querySelectorAll('.testimonial-card').forEach((card) => {
      if (card !== target) {
        card.classList.remove('active');
      }
    });

    target.classList.toggle('active');
  }

  // FLIP CARD
  toggleFlipCard(event: Event): void {
    const clickedCard = event.currentTarget as HTMLElement;
    const allCards = document.querySelectorAll('.flip-card');

    allCards.forEach((card) => {
      if (card !== clickedCard) {
        card.classList.remove('active');
      }
    });

    clickedCard.classList.toggle('active');
  }
}
