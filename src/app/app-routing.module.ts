import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { HelperFormComponent } from './components/helper-form/helper-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { HelperDashboardComponent } from './components/helper-dashboard/helper-dashboard.component';

import { AuthGuard } from './services/auth.guard';
import { HelpersTasksComponent } from './components/helpers-tasks/helpers-tasks.component';
import { HelperDoneComponent } from './components/helper-done/helper-done.component';
import { HelperMyAccountComponent } from './components/helper-my-account/helper-my-account.component';
import { ClientMyTasksComponent } from './components/client-my-tasks/client-my-tasks.component';
import { ClientDoneComponent } from './components/client-done/client-done.component';
import { ClientTaskFormComponent } from './components/client-task-form/client-task-form.component';
import { RoleGuard } from './services/role.guard';
import { CallRequestComponent } from './components/call-request/call-request.component';

const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'helper-form', component: HelperFormComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'client-form', component: ClientFormComponent },

  {
    path: 'helper-dashboard',
    component: HelperDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'volunteer' },
  },
  {
    path: 'helper-dashboard/my_tasks',
    component: HelpersTasksComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'volunteer' },
  },
  {
    path: 'helper-dashboard/done',
    component: HelperDoneComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'volunteer' },
  },
  {
    path: 'helper-dashboard/my-account',
    component: HelperMyAccountComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'volunteer' },
  },
  {
    path: 'client-task-form',
    component: ClientTaskFormComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'client' },
  },
  {
    path: 'client-tasks/my-tasks',
    component: ClientMyTasksComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'client' },
  },
  {
    path: 'client-tasks/done',
    component: ClientDoneComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'client' },
  },
  {
    path: 'client-tasks/call',
    component: CallRequestComponent,
    data: { role: 'client' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
