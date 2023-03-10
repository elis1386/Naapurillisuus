import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  imgUrl = 'assets/logotip.png';
  constructor(public afAuth: AngularFireAuth) {}

  logout(): void {
    this.afAuth.signOut();
  }

  showTab() {
    return (
      [
        '/helper-dashboard',
        '/helper-dashboard/my_tasks',
        '/helper-dashboard/done',
        '/helper-dashboard/my-account',
      ].indexOf(window.location.pathname) != -1
    );
  }
  showTapClient() {
    return (
      [
        '/client-task-form',
        '/client-tasks/my-tasks',
        '/client-tasks/done'
      
      ].indexOf(window.location.pathname) != -1
    );
  }
}
