import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ContactUs } from '../models/contactUs';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  contactUsCollection: AngularFirestoreCollection<ContactUs>;
  allFeedback: any;
  contactUsForm: any;
  feedback: Observable<ContactUs[]>;

  constructor(private firestore: Firestore, private afs: AngularFirestore, private db: AngularFirestore,) {}

  getAllFeedback():  Observable<ContactUs[]> {
    let feedback = collection(this.firestore, 'feedback');
    return collectionData(feedback, { idField: 'id' }) as Observable<
      ContactUs[]
    >;
  }

  sendcontactUsForm(feedback: ContactUs) {
  this.db.collection('feedback').add(feedback)
  }
}
