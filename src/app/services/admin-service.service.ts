import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  apiURL='http://localhost:8080';

  constructor(private httpClient : HttpClient) { }

  registerUser(admin : any) : Observable<any> {
    console.log(admin.userId + "::" + admin.userName);
    console.log(`${this.apiURL}/registerUser`);
    return this.httpClient.post<any>(`${this.apiURL}/registerUser`, admin);
  }
}
