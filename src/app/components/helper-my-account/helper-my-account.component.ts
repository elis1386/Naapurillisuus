import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  ) {}

  ngOnInit(): void {
    let loggedUser = JSON.parse(localStorage.getItem('user')!);
       this.currentUser = loggedUser;
       this.qrData = this.currentUser.firstName + this.currentUser.lastName
      console.log(this.currentUser);
    };

  askHelp() {
    this.router.navigate(['client-task-form']);
  }

}
