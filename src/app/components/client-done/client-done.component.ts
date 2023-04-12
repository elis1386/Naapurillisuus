import { Component, OnInit } from '@angular/core';
import { CTask } from 'src/app/models/client-tasks';
import { ClientDataService } from 'src/app/services/client-data.service';

@Component({
  selector: 'app-client-done',
  templateUrl: './client-done.component.html',
  styleUrls: ['./client-done.component.css']
})
export class ClientDoneComponent implements OnInit{
  doneTasks: CTask[] = [];
  constructor(private clientDataService: ClientDataService){}
  ngOnInit(): void {
    this.doneTasks = []
    let clientID = JSON.parse(localStorage.getItem('user')!).uid;
    this.clientDataService.getAllTasks().subscribe((data) => {
      data.forEach(doneTask => {
        if(clientID === doneTask.clientId && doneTask.status.done)
        this.doneTasks.push(doneTask)
      })
    })
  }
}
