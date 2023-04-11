import { Component, OnInit } from '@angular/core';
import { CTask } from 'src/app/models/client-tasks';
import { ClientDataService } from 'src/app/services/client-data.service';
import { ModalTasksService } from 'src/app/services/modal-tasks.service';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-client-my-tasks',
  templateUrl: './client-my-tasks.component.html',
  styleUrls: ['./client-my-tasks.component.css'],
})
export class ClientMyTasksComponent implements OnInit {
  isVisible = false;
  myTasks: CTask[] = [];
  currentClient: any;
  task: CTask;
  constructor(public clientDatService: ClientDataService, 
    public modalTasksService: ModalTasksService,
    public modalService: ModalService) {}

  ngOnInit() {
    this.myTasks = []

    let loggedUser = JSON.parse(localStorage.getItem('user')!);
    this.currentClient = loggedUser;

    let clientId = JSON.parse(localStorage.getItem('user')!).uid;
    this.clientDatService.getAllTasks().subscribe((data) => {
      data.forEach(task => {
        if(clientId === task.clientId ){
          console.log('got data', task)
          this.myTasks.push(task)
        }
    });
  })
}


deleteTask(id: string){
  this.clientDatService.deleteTask(id);
  this.myTasks = []
  this.modalService.done();

}
}
