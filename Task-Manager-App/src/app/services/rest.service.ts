import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  post(url: string, userData: any ): Observable<HttpResponse<any>> {
    return this.http.post<any>(url, userData, { observe: 'response' });
  }
}
