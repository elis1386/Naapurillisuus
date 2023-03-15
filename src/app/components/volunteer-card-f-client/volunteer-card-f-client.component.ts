import { Component } from '@angular/core';

@Component({
  selector: 'app-volunteer-card-f-client',
  templateUrl: './volunteer-card-f-client.component.html',
  styleUrls: ['./volunteer-card-f-client.component.css']
})
export class VolunteerCardFClientComponent {

  myQrCode: boolean = false;
  imgUrl = "https://source.unsplash.com/random/?user,face/300x202";
}
