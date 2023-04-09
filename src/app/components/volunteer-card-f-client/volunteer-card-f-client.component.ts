import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-volunteer-card-f-client',
  templateUrl: './volunteer-card-f-client.component.html',
  styleUrls: ['./volunteer-card-f-client.component.css']
})


export class VolunteerCardFClientComponent implements OnInit{

  currentUser: any;
  qrData: any;

  constructor(public modalService: ModalService){}

  ngOnInit(): void {
    let loggedUser = JSON.parse(localStorage.getItem('user')!);
       this.currentUser = loggedUser;
       this.qrData = this.currentUser.firstName + this.currentUser.lastName
      console.log(this.currentUser);
  }

  imgUrl = "https://source.unsplash.com/random/?user,face/300x202";

  volunteerQR(){
    this.modalService.open()
  }
}
