import { Component, OnInit } from '@angular/core';
import { CTask } from 'src/app/models/client-tasks';
import { ClientDataService } from 'src/app/services/client-data.service';
import { ModalTasksService } from 'src/app/services/modal-tasks.service';

@Component({
  selector: 'app-helper-done',
  templateUrl: './helper-done.component.html',
  styleUrls: ['./helper-done.component.css'],
})
export class HelperDoneComponent implements OnInit {
  tasks: CTask[] = [];

  constructor(
    public modalTasksService: ModalTasksService,
    public clientDataService: ClientDataService
  ) {}

  ngOnInit(): void {
    this.clientDataService.getAllTasks().subscribe((data) => {
      data.forEach((task) => {
        if (task.status.done) {
          this.tasks.push(task);
        }
      });
    });
  }
}
