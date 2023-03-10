import { Component, Input, OnInit } from '@angular/core';
import { ModalTasksService } from 'src/app/services/modal-tasks.service';

@Component({
  selector: 'app-modal-tasks',
  templateUrl: './modal-tasks.component.html',
  styleUrls: ['./modal-tasks.component.css'],
})
export class ModalTasksComponent implements OnInit {
  titleCancel: string = 'Do you really want to cancel this task?';
  titleDone: string = 'Do you want to complete this task?';

  constructor(public modalTasksService: ModalTasksService) {}

  ngOnInit() {}

  cancel() {
    this.modalTasksService.cancel();
  }
  done() {
    this.modalTasksService.done();
  }
  close() {
    this.modalTasksService.close();
  }
}
