import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RunningLogsComponent } from './running-logs/running-logs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RunDetailsComponent } from './run-details/run-details.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'runs',
    component: RunningLogsComponent
  },
  // {
  //   path: 'details/:id',
  //   component: RunDetailsComponent
  // },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
