import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/users';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-helper-my-account',
  templateUrl: './helper-my-account.component.html',
  styleUrls: ['./helper-my-account.component.css'],
})
export class HelperMyAccountComponent implements OnInit {
  @Input() 

  myQrCode: boolean = false;
  imgUrl = "https://source.unsplash.com/random/?user,face/300x202"

  currentUser: any;
  qrData: any;

  constructor(
    private router: Router,
    private db: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    let loggedUser = JSON.parse(localStorage.getItem('user')!);
       this.currentUser = loggedUser;
       this.qrData = this.currentUser.firstName + this.currentUser.lastName
      console.log(this.currentUser);
    };
  
  /* this.user = this.userDataService.getCurrentUser().subscribe((data) => {
    console.log(data);
    return this.user
    }); */

  askHelp() {
    this.router.navigate(['client-task-form']);
  }

}
