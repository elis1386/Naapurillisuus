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
  @Input() user: User;

  myQrCode: boolean = false;
  imgUrl = 'https://loremflickr.com/320/240/face';
  currentUser: any
  qrData: any

  constructor(
    private router: Router,
    public userDataService: UserDataService,
    private db: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    let loggedUser = JSON.parse(localStorage.getItem('user')!);
    this.userDataService.getAllUserData().subscribe((users) => {
      users.forEach((user) => {
       if(user.uid === loggedUser['uid']){
       console.log(user);
       this.currentUser = user
       this.qrData = `${user.firstName} ${user.lastName } ${user.role}`
       }
       return this.currentUser
      });
      console.log(this.currentUser);
    });
  }
  askHelp() {
    this.router.navigate(['client-task-form']);
  }
}
