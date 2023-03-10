import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../models/users';
import firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  userRef: AngularFirestoreCollection<User>;
  userLoggedIn: boolean;
  userData: any;
  user: any


  constructor(private router: Router, private afAuth: AngularFireAuth, public afs: AngularFirestore) {
    this.afAuth.authState.subscribe((user)=> {
      this.userLoggedIn = false;
      if(user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
        this.userLoggedIn = true
      }else{
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
        this.userLoggedIn = false
      }
    this.userRef = this.afs.collection<User>('users');
    });
  // constructor(private router: Router, private afAuth: AngularFireAuth) {}

  // ngOnInit() {
    
  //   };
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  signUpUser(user: any): Promise<any>{
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
    .then((result) => { 
      let emailLower = user.email.toLowerCase();
      result.user?.sendEmailVerification();
        const userModel: User = {
        uid: result.user?.uid,
        firstName: user.firstName,
        lastName: user.lastName,
        email: emailLower,
        password: user.password,
        address: user.address,
        city: user.city,
        zip: user.zip,
        about: user?.about,
        role: user.role,
        phoneNumber: user?.phone,
        photoURL: result.user?.photoURL, 
      }
      this.SetUserData(userModel)
    })
    .catch(error => {
      console.log('Auth Service: signup error', error);
      if(error.code){
        return { isValid: false, message: error.message };
      }
      return error.message;
    });
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Auth service: loginUser: success');
        this.getUserData().then(()=>{
          this.routing();
        })
      })
      .catch((error) => {
        console.log('Auth service: login error...');
        console.log('error code', error.code);
        console.log('error', error);
        if (error.code) return { isValid: false, message: error.message };
        return error.message;
      });

  }

  SetUserData(user:any){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    return userRef.set(user);
  }

  getUserData(){
    return firebase.firestore().collection('users').doc(firebase.auth().currentUser?.uid).get()
    .then((doc)=>{
      if (doc.exists){
        console.log(doc.data())
        this.user = doc.data();
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
  }

  isVolunteer(){
    return this.user.role === 'volunteer'
  }

  isClient(){
    return this.user.role === 'client'
  }

  routing(){
      if(this.isVolunteer()){
        this.router.navigate(['/helper-dashboard']);
      }else if(this.isClient()){
        this.router.navigate(['/client-task-form']);
      }
  }
}
