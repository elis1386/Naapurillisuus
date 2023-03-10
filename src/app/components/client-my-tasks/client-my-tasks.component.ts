import { Component } from '@angular/core';

import { VolunteerCardFClientComponent } from '../volunteer-card-f-client/volunteer-card-f-client.component';

@Component({
  selector: 'app-client-my-tasks',
  templateUrl: './client-my-tasks.component.html',
  styleUrls: ['./client-my-tasks.component.css']
})
export class ClientMyTasksComponent {
  
  isVisible = false;

  // showVolunteer() {
  //   this.volunteer_visible = !this.volunteer_visible;
  // }
}
