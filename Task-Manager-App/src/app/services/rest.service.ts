import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  post(url: any, userData: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(url, userData);
  }
  
}
