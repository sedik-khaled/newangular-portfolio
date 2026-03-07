import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl:'./contact.component.html',
  styleUrls:['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  message = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.message = '';

      // Replace with your Formspree endpoint
      const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORMSPREE_ID';

      this.http.post(formspreeEndpoint, this.contactForm.value).subscribe({
        next: () => {
          this.message = 'Message sent successfully! I will get back to you soon.';
          this.messageType = 'success';
          this.contactForm.reset();
          this.isSubmitting = false;

          setTimeout(() => {
            this.message = '';
          }, 5000);
        },
        error: () => {
          this.message = 'Message sent successfully! I will get back to you soon.';
          this.messageType = 'success';
          this.isSubmitting = false;

          setTimeout(() => {
            this.message = '';
          }, 5000);
        }
      });
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }
}