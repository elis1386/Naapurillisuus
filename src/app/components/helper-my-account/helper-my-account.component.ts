import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-helper-my-account',
  templateUrl: './helper-my-account.component.html',
  styleUrls: ['./helper-my-account.component.css'],
})
export class HelperMyAccountComponent implements OnInit {
  @Input()
  myQrCode: boolean = false;
  imgUrl = 'https://source.unsplash.com/random/?user,face/300x202';

  currentUser: any;
  qrData: any;

  constructor(
    private router: Router,
    public userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    let loggedUser = JSON.parse(localStorage.getItem('user')!);
    this.userDataService.getAllUserData().subscribe((users) => {
      users.forEach((user) => {
        if (user.uid === loggedUser['uid']) {
          this.currentUser = user;
          this.qrData = `${user.firstName} ${user.lastName} ${user.role}`;
        }
        return this.currentUser;
      });
      this.currentUser = loggedUser;
      this.qrData = this.currentUser.firstName + this.currentUser.lastName;
      console.log(this.currentUser);
    });
  }

  askHelp() {
    this.router.navigate(['client-task-form']);
  }
}
