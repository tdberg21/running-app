import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RunDetailsComponent } from './run-details/run-details.component';
import { RunningLogsComponent } from './running-logs/running-logs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RunningLogsComponent,
    RunDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
