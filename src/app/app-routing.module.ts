import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunningLogsComponent } from './running-logs/running-logs.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'runs',
    component: RunningLogsComponent
  },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
