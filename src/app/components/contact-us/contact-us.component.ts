import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  constructor(private toastr: ToastrService) {}
  userName: string = '';
  userEmail: string = '';
  message: string = '';
  onSubmit(e: Event) {
    console.log('User Name:', this.userName);
    console.log('User Email:', this.userEmail);
    console.log('Message:', this.message);

    emailjs
      .sendForm(
        'service_4kaqafh',
        'template_r3vhphg',
        e.target as HTMLFormElement,
        'xRv0sgTR49eb2YqxD'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.toastr.success('Thankyou for your response!');
        },
        (error) => {
          console.log(error);
        }
      );

    this.userName = '';
    this.userEmail = '';
    this.message = '';
  }
}
