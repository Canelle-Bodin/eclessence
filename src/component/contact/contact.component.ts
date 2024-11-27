import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [
    ReactiveFormsModule,
    HeaderComponent
  ],
  standalone: true,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form data:', this.contactForm.value);
      alert('Merci pour votre message !');
      this.contactForm.reset();
    }
  }
}
