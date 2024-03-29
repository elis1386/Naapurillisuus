
import { Component, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import {
  addDoc,
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  docData,
  collectionData,
} from '@angular/fire/firestore';
import { ContactUs } from 'src/app/models/contactUs';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements ControlValueAccessor {
  @Input() transcript: string = '';



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
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.contactUsForm = new FormGroup({
      problemType: new FormControl('', Validators.required),
      details: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    this.contactUsService.getAllFeedback().subscribe((data) => {
      console.log(data);
    });


    this.textTemplate = [
      'Hello. Could you please to help me?',
      'I can not do task.',
      'It does not work correctly.',
      'It is reallu helpfull.',
      'I always got an error.',
      'I am not satisfied your service.',
      'I am so glad to use your app.',
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
    this.contactUsService.sendData(this.contactUsForm.value);
    this.contactUsForm.reset();
    this.modalService.open();
  }
  showData() {
    this.contactUsService.sendData(this.contactUsForm.value);
    console.log(this.contactUsForm.value);
  }
}
