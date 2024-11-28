import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [ReactiveFormsModule, HeaderComponent],
  standalone: true,
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.contactService.sendEmail(formData).subscribe({
        next: (response) => {
          if (response.success) {
            console.log('Email envoyé avec succès:', response);
            this.successMessage = 'Merci pour votre message !';
            this.errorMessage = null;
            this.contactForm.reset();
          } else {
            console.error('Erreur dans la réponse:', response.message);
            this.successMessage = null;
            this.errorMessage = response.message || 'Une erreur est survenue.';
          }
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi de l\'email:', error);
          this.successMessage = null;
          this.errorMessage = 'Une erreur est survenue lors de l\'envoi du message.';
        }
      });
    }
  }
}
