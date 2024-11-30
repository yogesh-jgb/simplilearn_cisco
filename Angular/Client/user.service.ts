import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { UserInformation } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<UserInformation> {
    const url = 'https://reqres.in/api/users?page=1';

    return this.http.get<UserInformation>(url); // HTTP GET method is called
  }
}
