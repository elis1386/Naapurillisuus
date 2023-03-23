import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ContactUs } from 'src/app/models/contactUs';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  form: any;
  contactUsForm: FormGroup;
  contactUsCollection: AngularFirestoreCollection<ContactUs>;
  allFeedback: any;
  title: string = 'Thanks for your submission.';
  textTemplate: string[];
  selectedText: string;

  constructor(
    public contactUsService: ContactUsService,
    public modalService: ModalService
  ) {}

  ngOnInit() {
    this.contactUsForm = new FormGroup({
      problemType: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    this.textTemplate = [
      'Good daytime',
      'Could you please to help me?',
      'I can not do task.',
      'I always got a error message.',
      'I am not satisfied your service.',
      'It works bad.',
      'I am so glad to use your app.',
      'It is reallu helpfull.',
    ];
    this.selectedText = '';
  }
  showHints(text: string) {
    this.selectedText += text + ' ';
    console.log('click');
  }

  sendContactUsForm() {
    if (this.contactUsForm.invalid) {
      return this.contactUsForm.markAllAsTouched();
    }
    this.contactUsService.sendcontactUsForm(this.contactUsForm.value);
    this.contactUsForm.reset();
    this.modalService.open();
  }
}
