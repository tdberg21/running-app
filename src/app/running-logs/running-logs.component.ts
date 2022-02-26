import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Run } from '../run';
import { RUNS } from "../mock-runs";

@Component({
  selector: 'running-logs-component',
  templateUrl: './running-logs.component.html',
  styleUrls: ['./running-logs.component.scss'],
})
export class RunningLogsComponent {
  title='Running Logs';
  runs = RUNS;
}