import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users';
import {
  addDoc,
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  docData,
} from '@angular/fire/firestore';
import { Observable, OperatorFunction } from 'rxjs';
import { collectionData } from '@angular/fire/firestore';
import { authInstance$, idToken } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  user: Observable<User>;

  constructor(private firestore: Firestore, private afs: AngularFirestore) {}

  getAllUserData(): Observable<User[]> {
    let users = collection(this.firestore, 'users');
    return collectionData(users, { idField: 'id' }) as Observable<User[]>;
  }
  getCurrentUserData() {
    let loggedUser = JSON.parse(localStorage.getItem('user')!);
    let user = doc(this.firestore, 'users/' + loggedUser.uid);
    return docData(user, { idField: 'id' });
  }

  /*  getUser() {
    let loggedUser = JSON.parse(localStorage.getItem('user')!);
    let currentUser = collection(this.firestore, 'users/' + loggedUser.uid)
   
  }  */
}
