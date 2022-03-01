import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Run } from '../run';
import { NewRunsService } from "../new-runs.service";

@Component({
  selector: 'running-logs-component',
  templateUrl: './running-logs.component.html',
  styleUrls: ['./running-logs.component.scss'],
})
export class RunningLogsComponent implements OnInit{
  constructor(private newRunsService: NewRunsService) {}

  runs: Run[] = [];
  
  selectedRun?: Run;

  ngOnInit(): void {
    this.getRuns();
  }

  onSelect(run: Run): void {
    this.selectedRun = run;
  }

  getRuns(): void {
    this.newRunsService.getRuns()
      .subscribe(runs => this.runs = runs);
  }

  addRun(distance: number, duration: string, route: string): void {
    console.log(distance);
    if (!duration) { return; }
    this.newRunsService.addNewRun({ distance, duration, route } as Run)
    
      .subscribe((run: Run) => {
        this.runs.unshift(run);
      });
  }
}

