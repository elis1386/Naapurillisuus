import { Component, OnInit } from '@angular/core';
import { checkLg } from 'ngx-bootstrap-icons';
import { ModalTasksService } from 'src/app/services/modal-tasks.service';

@Component({
  selector: 'app-helpers-tasks',
  templateUrl: './helpers-tasks.component.html',
  styleUrls: ['./helpers-tasks.component.css'],
})
export class HelpersTasksComponent implements OnInit {
  manageTask: boolean = false;


  constructor(public modalTasksService: ModalTasksService) {}

  ngOnInit() {}
  completedTask() {
    this.modalTasksService.open();
    console.log('modal should be open');
  }
  canceledTask() {
    this.modalTasksService.open();
    console.log('modal should be open');
  }
}
