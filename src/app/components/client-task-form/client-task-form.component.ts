import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { User } from 'src/app/models/users';
import { UserDataService } from 'src/app/services/user-data.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ClientDataService } from 'src/app/services/client-data.service';
import { CTask } from 'src/app/models/client-tasks';
import { ModalService } from 'src/app/services/modal.service';

import { v4 as uuid} from 'uuid';

@Component({
  selector: 'app-client-task-form',
  templateUrl: './client-task-form.component.html',
  styleUrls: ['./client-task-form.component.css'],
})
export class ClientTaskFormComponent implements OnInit {
  @Input() user: User;

  model1: string;
  model2: string;
  currentClient: any;
  title: string = 'We have got your request.';
  addTaskForm: FormGroup;
  tasksCollection: AngularFirestoreCollection<CTask>;
  textTemplate: string[];
  selectedText: string;

  constructor(
    public userDataService: UserDataService,
    public clientDataService: ClientDataService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.addTaskForm = new FormGroup({
      title: new FormControl('', Validators.required),
      period: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      isUrgent: new FormControl(''),
    });

    let loggedUser = JSON.parse(localStorage.getItem('user')!);
    this.userDataService.getAllUserData().subscribe((users) => {
      users.forEach((user) => {
        if (user.uid === loggedUser['uid']) {
          this.currentClient = user;
        }
        return this.currentClient;
      });
    });


    this.textTemplate = [
      'Hello. ',
      'I feel bad.',
      'Could you please to help me with my problem? ',
      'Take my dog for a walk for 20 min.',
     /*  'Buy some food in nearest shop. ',
      'Help me with moving. ',
      'Ihave some problem with PC. ', */

      
    ];
     this.textTemplate = [
      'Hello. ',
      'I feel bad.',
      'Could you please to help me with my problem? ',
      'Take my dog for a walk for ',
      'Do some shopping for me in nearest shop.',
      'Help me with updating my PC',
    ]; 
    this.selectedText = '';
  }

  showHints(text: string) {
    this.selectedText += text + ' ';
    console.log('click');
  }
  clearInpiut() {
    this.selectedText = '';
  }

  addToClientTask() {
    if (this.addTaskForm.invalid) {
      return this.addTaskForm.markAllAsTouched();
    }
    let task = this.addTaskForm.value;
    task.date = Date.now();
    task.status = {active: true}
    task.id = uuid();
    task.clientId = JSON.parse(localStorage.getItem('user')!).uid;
    this.clientDataService.sendTaskData(task);
    this.addTaskForm.reset();
    this.modalService.open();
  }
}
