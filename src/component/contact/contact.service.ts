import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = '/send-email';

  constructor(private http: HttpClient) {}

  sendEmail(contactData: any): Observable<any> {
    return this.http.post(this.apiUrl, contactData);
  }
}
