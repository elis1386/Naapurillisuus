import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css'],
})
export class TabPanelComponent implements OnInit {
  @Input() showTap: boolean;


  ngOnInit() {}

  getActive() {
    if (window.location.pathname === 'helper-dashboard') {
      return 1;
    } else if (window.location.pathname === '/helper-dashboard/my_tasks') {
      return 2;
    } else if (window.location.pathname === '/helper-dashboard/done') {
      return 3;
    } else if (window.location.pathname === '/helper-dashboard/my-account') {
      return 4;
    }
    return 1;
  }
}
