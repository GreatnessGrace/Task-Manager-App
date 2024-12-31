import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  post(url: string, data: any, options = {}): Observable<any> {
    console.log('Making POST request to:', url); 
    console.log('Request body:', data); 
    console.log('Request options:', options); 

    return this.http.post(url, data, options).pipe(
      catchError(this.handleError) 
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Client-side or network error:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
    }
    return throwError('Something went wrong, please try again later.');
  }
}
