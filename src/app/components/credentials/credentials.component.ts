import { Component } from '@angular/core';

@Component({
  selector: 'app-credentials',
  imports: [],
  templateUrl: './credentials.component.html',
  styleUrl: '../../app.component.css',
})
export class CredentialsComponent {
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
}
