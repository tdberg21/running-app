import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';
import { Run } from './run';
import { RUNS } from './mock-runs';

@Injectable({
  providedIn: 'root'
})
export class NewRunsService {
  
  constructor(
    private http: HttpClient,
    ) { }
    
    getRuns(): Observable<Run[]> {
      //  return this.http.get<Run[]>(this.runsUrl)
      //   .pipe(
      //     tap(_ => this.log('fetched runs')),
      //     catchError(this.handleError<Run[]>('getRuns', []))
      //   );
      const runs = of(RUNS);
      return runs;
    }
    
    getRun(id: number): Observable<Run> {
      const url = `${this.runsUrl}/${id}`;
      return this.http.get<Run>(url).pipe(
        tap(_ => this.log(`fetched run id=${id}`)),
        catchError(this.handleError<Run>(`getRun id=${id}`))
        );
      }
      
      private log(message: string) {
        console.log(message);
      }

      httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      
      private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
          
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
          
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
      
      /** POST: add a new run to the server */
      addNewRun(run: Run): Observable<Run> {
        RUNS.push(run)
        const newRuns = this.getRuns();
        console.log(newRuns)
        return this.http.post<Run>(this.runsUrl, run, this.httpOptions).pipe(
          tap((newRun: Run) => this.log(`added run w/ id=${newRun.id}`)),
          catchError(this.handleError<Run>('addRun'))
          );
        }
        
        private runsUrl = 'api/runs';
      }
      
      
      