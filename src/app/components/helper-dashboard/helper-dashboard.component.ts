import { Component, OnInit } from '@angular/core';
import { VTask } from 'src/app/models/vtasks';
import { tasks as data } from 'src/app/data/tasks';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ClientDataService } from 'src/app/services/client-data.service';
import { CTask } from 'src/app/models/client-tasks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-helper-dashboard',
  templateUrl: './helper-dashboard.component.html',
  styleUrls: ['./helper-dashboard.component.css'],
})
export class HelperDashboardComponent implements OnInit {
  imgUrl = './assets/myAcc4.png';
  disabled = false;
  myQrCode: boolean = false;
  /*   tasks: VTask[] = data; */
  tasks: CTask[] = [];
  active: any;
  alert: boolean = false;

  constructor(
    private router: Router,
    private db: AngularFirestore,
    public clientDataService: ClientDataService
  ) {}

  ngOnInit(): void {
    this.clientDataService.getAllTasks().subscribe((data) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }

  addToMyTasks() {
    let currentTask = this.db.collection('tasks').doc('tasks/' )
    this.alert = true;
    /* add ngClass to this tasl on hdashbord - hidden*/
  }

  closeAlert() {
    this.alert = false;
  }
}

/* this.user = this.userDataService.getCurrentUser().subscribe((data) => {
  console.log(data);
  return this.user */
