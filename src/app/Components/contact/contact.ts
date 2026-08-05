import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastService } from '../../services/toast.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private toastService = inject(ToastService);

  contactForm: FormGroup;
  isSubmitting = false;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }

  onSubmit() {
    if (this.contactForm.invalid) {
      // Mark all fields as touched to display errors
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const formData = this.contactForm.value;

    // Use EmailJS to send the email
    // Replace these values with your own EmailJS credentials
    const SERVICE_ID = 'service_xxxxxxxx'; // Your EmailJS service ID
    const TEMPLATE_ID = 'template_xxxxxxxx'; // Your EmailJS template ID
    const USER_ID = 'xxxxxxxxxxxxxxxxxxxxxxxx'; // Your EmailJS user ID (public key)

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email
    }, USER_ID)
    .then(
      (result: EmailJSResponseStatus) => {
        this.isSubmitting = false;
        this.contactForm.reset();
        this.contactForm.markAsPristine();
        this.contactForm.markAsUntouched();
        this.toastService.showSuccess('Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
      },
      (error) => {
        this.isSubmitting = false;
        console.error('EmailJS error:', error);
        this.toastService.showError('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      }
    );
  }

  // Method to check if a field has an error and has been touched
  isFieldInvalid(fieldName: string): boolean {
    const control = this.contactForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  // Method to get error message for a field
  getErrorMessage(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (!control) return '';

    if (control.hasError('required')) {
      return 'Ce champ est requis';
    }

    if (control.hasError('email')) {
      return 'Veuillez entrer une adresse email valide';
    }

    if (control.hasError('minlength')) {
      const requiredLength = control.errors?.['minlength'].requiredLength;
      return `Ce champ doit contenir au moins ${requiredLength} caractères`;
    }

    return '';
  }
}