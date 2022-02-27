import { Component, OnInit } from '@angular/core';
import { STATS } from '../mock-runs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getStats(): any {
    return STATS;
  }

  stats = this.getStats();

}
