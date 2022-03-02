import { Component, OnInit } from '@angular/core';
import { Run } from 'api/lib/api-interfaces';
import { STATS } from '../mock-runs';
import { RUNS } from '../mock-runs';

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

  getRuns(): Run[] {
    return RUNS;
  }

  stats = this.getStats();
  runs = this.getRuns();
}
