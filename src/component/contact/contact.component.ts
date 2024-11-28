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
          console.log('Email envoyé avec succès:', response);
          alert('Merci pour votre message !');
          this.contactForm.reset();
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi de l\'email:', error);
          alert('Une erreur est survenue lors de l\'envoi du message.');
        }
      });
    }
  }
}
