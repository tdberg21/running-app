import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Run } from './run';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  constructor() { }
  
  createDb() {
    const runs = [
      { id: 11, distance: 3.2, duration: '22:37', route: 'Harvard Gulch' },
      { id: 12, distance: 3.3, duration: '22:37', route: 'Sloans Lake' },
      { id: 13, distance: 4.1, duration: '31:37', route: 'Platte Park' },
      { id: 14, distance: 3.2, duration: '22:37', route: 'Highline Canal' },
      { id: 15, distance: 3.5, duration: '27:52', route: 'Magnolia' },
      { id: 16, distance: 7.2, duration: '22:37', route: 'Cherry Creek' },
      { id: 17, distance: 3.2, duration: '22:37', route: 'Kunming Hill' },
      { id: 18, distance: 5.1, duration: '46:04', route: 'Stadium' },
      { id: 19, distance: 3.2, duration: '22:37', route: 'Harvard Gulch' },
      { id: 20, distance: 5.5, duration: '46:37', route: 'Sloans' }
    ];
    return runs;
  }

  genId(runs: Run[]): number {
    return runs.length > 0 ? Math.max(...runs.map(run => run.id)) + 1 : 11;
  }

  genTotal(runs: Run[]): number {
    const total = runs.reduce((acc, run)=>  (
      acc + run.distance
    ), 0)
    return total
  }
}

