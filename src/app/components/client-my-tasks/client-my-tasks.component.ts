import { Component, OnInit } from '@angular/core';
import { CTask } from 'src/app/models/client-tasks';
import { ClientDataService } from 'src/app/services/client-data.service';


@Component({
  selector: 'app-client-my-tasks',
  templateUrl: './client-my-tasks.component.html',
  styleUrls: ['./client-my-tasks.component.css'],
})
export class ClientMyTasksComponent implements OnInit {
  isVisible = false;
  myTasks: CTask[] = [];
  constructor(public clientDatService: ClientDataService) {}

  ngOnInit() {
    let clientId = JSON.parse(localStorage.getItem('user')!).uid;
    this.clientDatService.getAllTasks().subscribe((data) => {
      data.forEach(task => {
        if(clientId === task.clientId ){
          this.myTasks.push(task)
        }
      });
    })
  }

deleteTask(id: string){
  this.clientDatService.deleteTask(id)
  this.myTasks = []
  }
}
