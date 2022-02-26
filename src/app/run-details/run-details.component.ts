import { Component, OnInit, Input } from '@angular/core';
import { Run } from '../run';

@Component({
  selector: 'app-run-details',
  templateUrl: './run-details.component.html',
  styleUrls: ['./run-details.component.scss']
})

export class RunDetailsComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  @Input() run?: Run;
}