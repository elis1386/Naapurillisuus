import { Component, OnInit } from '@angular/core';
import { ClientDataService } from 'src/app/services/client-data.service';
import { CTask } from 'src/app/models/client-tasks';

@Component({
  selector: 'app-helper-dashboard',
  templateUrl: './helper-dashboard.component.html',
  styleUrls: ['./helper-dashboard.component.css'],
})
export class HelperDashboardComponent implements OnInit {
  imgUrl = './assets/myAcc4.png';
  disabled = false;
  isOpen = false;
  myQrCode: boolean = false;
  /*   tasks: VTask[] = data; */
  tasks: CTask[] = [];
  active: any;
  alert: boolean = false;
  currentTask: any;

  constructor(public clientDataService: ClientDataService) {}

  ngOnInit() {
    this.clientDataService.getAllTasks().subscribe((data) => {
      data.forEach((task: CTask) => {
        if (task.status.active) this.tasks.push(task);
      });
    });
  }

  addToMyTasks(id: string | undefined) {
    this.clientDataService.update(id, false, true);
    this.alert = true;
  }

  closeAlert() {
    this.alert = false;
  }
}
