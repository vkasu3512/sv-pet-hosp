import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  message = '';

  waIcon = faWhatsapp;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  sendMessage() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.message = `Hello Dr. Kasi, My name is ${this.contactForm.controls['name'].value}. ${this.contactForm.controls['message'].value}. Please contact me on ${this.contactForm.controls['phone'].value}!`;
      window.open(`https://wa.me/916300098268?text=${this.message}`);

      this.submitted = false;
      this.contactForm.reset();
    }
  }

}
