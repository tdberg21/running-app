import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Run } from './run';
import { RUNS } from './mock-runs';

@Injectable({
  providedIn: 'root'
})
export class NewRunsService {

  constructor() { }

  getRuns(): Observable<Run[]> {
    const runs = of(RUNS);
    return runs;
  }
}


