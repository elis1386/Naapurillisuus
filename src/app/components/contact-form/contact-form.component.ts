import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
export class ContactFormComponent implements OnInit {
  contactUsForm: FormGroup;
  contactUsCollection: AngularFirestoreCollection<ContactUs>;
  allFeedback: any;
  title: string = 'Thanks for your submission.';

  constructor(
    private firestore: Firestore,
    private afs: AngularFirestore,
    private db: AngularFirestore,
    public contactUsService: ContactUsService,
    public modalService: ModalService
  ) {}

  ngOnInit() {
    this.contactUsForm = new FormGroup({
      problemType: new FormControl('', Validators.required),
      details: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
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
