import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders} from
 '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import {Paliandroms} from '../models/paliandroms';
import {Observable, throwError, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PalindromsService {
    apiUrl= 'http://test.pronpa.ru/index.php';
    Paliandroms = new Paliandroms('');
    Paliandrom: Paliandroms[];

  constructor(
    private httpClient: HttpClient,
  ) { }
  
  palindrom(paliandroms: Paliandroms) {      
      return this.httpClient.post(`${this.apiUrl}`,paliandroms)
      .pipe(map((res) => {
          this.Paliandrom = res['data'];
          return this.Paliandrom;
      }),
      catchError(this.handleError)
      );
  }
  
  private handleError(error: HttpErrorResponse) {
     return throwError('В данной строке палиндромов не обнаружено!');
  }
  
    
    
}
