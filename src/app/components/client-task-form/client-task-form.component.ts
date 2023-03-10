import { Component, Injectable, Input, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { UserDataService } from 'src/app/services/user-data.service';
import { NgbCalendar, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientDataService } from 'src/app/services/client-data.service';
import { CTask } from 'src/app/models/client-tasks';

@Component({
  selector: 'app-client-task-form',
  templateUrl: './client-task-form.component.html',
  styleUrls: ['./client-task-form.component.css'],
})
export class ClientTaskFormComponent implements OnInit {
  @Input() user: User;

  currentClient: any;
  addTaskForm: FormGroup;
  tasksCollection: AngularFirestoreCollection<CTask>;

  constructor(
    private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>,
    private router: Router,
    public userDataService: UserDataService,
    private db: AngularFirestore,
    public clientDataService: ClientDataService
  ) {}

  ngOnInit() {
    this.addTaskForm = new FormGroup({
      helpType: new FormControl('', Validators.required),
      period: new FormControl('', Validators.required),
      comments: new FormControl('', Validators.required),
      isUrgent: new FormControl(''),
    });

    let loggedUser = JSON.parse(localStorage.getItem('user')!);
    this.userDataService.getAllUserData().subscribe((users) => {
      users.forEach((user) => {
        if (user.uid === loggedUser['uid']) {
          console.log(user);
          this.currentClient = user;
        }
        return this.currentClient;
      });
      console.log(this.currentClient);
    });
  }

  addClientTask() {
    if(this.addTaskForm.invalid){
      return this.addTaskForm.markAllAsTouched()
    }
    this.clientDataService.sendTaskData(this.addTaskForm.value);
    this.addTaskForm.reset();
    console.log('click');
  }
}
