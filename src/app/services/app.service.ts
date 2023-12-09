import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'your_api_endpoint';
  constructor(private http: HttpClient) { }

   login(formData: any): Observable<any> {
    debugger;
    return this.http.post(`${this.apiUrl}/login`, formData);
  }

}
