import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: '../../app.component.css',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  formState: 'idle' | 'submitting' | 'success' | 'error' = 'idle';
  touched = { name: false, email: false, message: false };

  get isNameValid(): boolean {
    return this.formData.name.trim().length >= 2;
  }

  get isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.formData.email);
  }

  get isMessageValid(): boolean {
    return this.formData.message.trim().length >= 10;
  }

  get isFormValid(): boolean {
    return this.isNameValid && this.isEmailValid && this.isMessageValid;
  }

  markTouched(field: 'name' | 'email' | 'message'): void {
    this.touched[field] = true;
  }

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();

    if (!this.isFormValid) {
      this.touched = { name: true, email: true, message: true };
      return;
    }

    this.formState = 'submitting';

    try {
      const response = await fetch('https://formspree.io/f/xwpvnrpp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.formData)
      });

      if (response.ok) {
        this.formState = 'success';
        this.formData = { name: '', email: '', message: '' };
        this.touched = { name: false, email: false, message: false };
        setTimeout(() => this.formState = 'idle', 5000);
      } else {
        this.formState = 'error';
        setTimeout(() => this.formState = 'idle', 5000);
      }
    } catch {
      this.formState = 'error';
      setTimeout(() => this.formState = 'idle', 5000);
    }
  }
}
