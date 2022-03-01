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
      { id: 1, distance: 3.2, duration: '22:37', route: 'Harvard Gulch' },
      { id: 2, distance: 3.3, duration: '22:37', route: 'Sloans Lake' },
      { id: 3, distance: 4.1, duration: '31:37', route: 'Platte Park' },
      { id: 4, distance: 3.2, duration: '22:37', route: 'Highline Canal' },
      { id: 5, distance: 3.5, duration: '27:52', route: 'Magnolia' },
      { id: 6, distance: 7.2, duration: '22:37', route: 'Cherry Creek' },
      { id: 7, distance: 3.2, duration: '22:37', route: 'Kunming Hill' },
      { id: 8, distance: 5.1, duration: '46:04', route: 'Stadium' },
      { id: 9, distance: 3.2, duration: '22:37', route: 'Harvard Gulch' },
      { id: 10, distance: 5.5, duration: '46:37', route: 'Sloans' }
    ];
    runs.reverse();
    return {runs};
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

