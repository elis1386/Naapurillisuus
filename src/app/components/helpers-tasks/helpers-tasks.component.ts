import { Component, OnInit } from '@angular/core';
import { CTask } from 'src/app/models/client-tasks';
import { ClientDataService } from 'src/app/services/client-data.service';
import { ModalTasksService } from 'src/app/services/modal-tasks.service';

@Component({
  selector: 'app-helpers-tasks',
  templateUrl: './helpers-tasks.component.html',
  styleUrls: ['./helpers-tasks.component.css'],
})
export class HelpersTasksComponent implements OnInit {
  manageTask: boolean = false;
  tasks: CTask[] = [];
  titleCancel: string = 'Do you really want to cancel this task?';

  constructor(public modalTasksService: ModalTasksService, public clientDataService: ClientDataService) {}
  cancel() {
    this.modalTasksService.cancel();
  }
  done() {
    this.modalTasksService.done();
  }
  close() {
    this.modalTasksService.close();
  }

  ngOnInit() {
    
    this.clientDataService.getAllTasks().subscribe((data) => {
      data.forEach(task => {
        if(task.status.inProgress){
          this.tasks.push(task)
        }
    });
  })
  }
  completedTask(id?:string) {
    this.modalTasksService.open();
    console.log('modal should be open');
    this.clientDataService.update(id, false, false, true)
  }
  canceledTask(id?:string) {
    this.modalTasksService.open();
    console.log('modal should be open');
    this.clientDataService.update(id, true, false)
  }
}
