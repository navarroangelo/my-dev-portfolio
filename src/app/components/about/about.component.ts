import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: '../../app.component.css',
})
export class AboutComponent {
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
