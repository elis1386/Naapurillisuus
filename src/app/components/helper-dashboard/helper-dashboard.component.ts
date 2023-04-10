import { Component, OnInit } from '@angular/core';
import { VTask } from 'src/app/models/vtasks';
import { tasks as data } from 'src/app/data/tasks';
import { Router } from '@angular/router';
import {
  AngularFirestore,
} from '@angular/fire/compat/firestore';
import { ClientDataService } from 'src/app/services/client-data.service';
import { CTask } from 'src/app/models/client-tasks';
import { User } from '@angular/fire/auth';

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
  tasks: CTask[] = [];
  active: any;
  alert: boolean = false;
  currentTask: any;
  volunteerID = JSON.parse(localStorage.getItem('user')!).uid;

  constructor(public clientDataService: ClientDataService, private router: Router) {}

  ngOnInit() {
    this.clientDataService.getAllTasks().subscribe((data) => {
      data.forEach((task: CTask) => {
        if (task.status.active) this.tasks.push(task);
      });
    });
  }

  addToMyTasks(id: string | undefined) {
    this.tasks = []
    this.clientDataService.update(id, false, true, false, this.volunteerID);
    this.alert = true;
    this.router.navigate(['helper-dashboard/my_tasks'])
  }

  closeAlert() {
    this.alert = false;
  }
}
