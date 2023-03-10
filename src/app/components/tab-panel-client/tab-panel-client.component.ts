import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-panel-client',
  templateUrl: './tab-panel-client.component.html',
  styleUrls: ['./tab-panel-client.component.css']
})
export class TabPanelClientComponent {
  @Input() showTapshowTabClient: boolean;

  getActive() {
    if (window.location.pathname === 'client-task-form') {
      return 1;
    } else if (window.location.pathname === '/client-tasks/my-tasks') {
      return 2;
    } else if (window.location.pathname === '/client-tasks/done') {
      return 3;
    } else if (window.location.pathname === '/client-tasks/call') {
      return 4;
    }
    return 1;
  }

}
