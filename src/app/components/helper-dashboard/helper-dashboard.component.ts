import { Component, OnInit } from '@angular/core';
import { VTask } from 'src/app/models/vtasks';
import { tasks as data } from 'src/app/data/tasks';
import { Router } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ClientDataService } from 'src/app/services/client-data.service';
import { CTask } from 'src/app/models/client-tasks';
import { CommonModule } from '@angular/common';
import { updateDoc, doc } from '@firebase/firestore';
import firebase from 'firebase/compat/app'
import { merge } from 'rxjs';


@Component({
  selector: 'app-helper-dashboard',
  templateUrl: './helper-dashboard.component.html',
  styleUrls: ['./helper-dashboard.component.css'],
})
export class HelperDashboardComponent implements OnInit {
  imgUrl = './assets/myAcc4.png';
  disabled = false;
  isOpen = false
  myQrCode: boolean = false;
  /*   tasks: VTask[] = data; */
  tasks: CTask[] = [];
  active: any;
  alert: boolean = false;
  currentTask: any;

  constructor(
    private router: Router,
    private db: AngularFirestore,
    public clientDataService: ClientDataService,
  ) {}

  ngOnInit() {
    this.clientDataService.getAllTasks().subscribe((data) => {
      data.forEach((task: CTask) => {
        if (task.status.active) this.tasks.push(task);
      });
    });
  }

  addToMyTasks(id: string | undefined) {
    // this.clientDataService.getTask(id!).then((res: any) => {
    //   this.currentTask = res;
    //   console.log(this.currentTask);
    // })
    this.clientDataService.update(id, false, true);
    this.alert = true;
    // this.router.navigate(['helper-dashboard/my_tasks'])
    /* add ngClass to this tasl on hdashbord - hidden*/
  }

  closeAlert() {
    this.alert = false;
  }
}

