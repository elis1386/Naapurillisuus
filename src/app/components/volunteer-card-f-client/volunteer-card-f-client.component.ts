import { Component, Input, OnInit, Type } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ClientDataService } from 'src/app/services/client-data.service';

@Component({
  selector: 'app-volunteer-card-f-client',
  templateUrl: './volunteer-card-f-client.component.html',
  styleUrls: ['./volunteer-card-f-client.component.css']
})


export class VolunteerCardFClientComponent implements OnInit{
  @Input() value: any;
  qrData: any;
  volunteerName: any;
  volunteerDescription: any;
  constructor(public modalService: ModalService, private clientDataService: ClientDataService){}

  ngOnInit(): void {
    this.volunteerInfo(this.value);
  }
  
  imgUrl = "https://source.unsplash.com/random/?user,face/300x202";
  
  volunteerQR(){
    this.modalService.open()
  }
  
  volunteerInfo(volunteerID: string){
    this.clientDataService.getDataAboutUser(volunteerID).then(volunteer => {
    let name = `${volunteer.firstName} ${volunteer.lastName}`;
    this.volunteerName = name;
    this.qrData = name;  //do not work correctly, show just last volunteer name
    this.volunteerDescription = volunteer.about
    }) 
  }
}
