import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  apiURL='http://localhost:8080/';
  jwtToken : string = "";
  userRole : string = "";
  userCreationMsg : string = "";
  constructor(private httpClient : HttpClient) { }

  generateToken(userName : string, password : string) {
    const authRequest = {
					"userName" : userName,
					"password" : password		
		}
    console.log(authRequest.userName + "::" + authRequest.password);
    console.log(`${this.apiURL}auth/generateToken`);
    return this.httpClient.post<any>(`${this.apiURL}auth/generateToken`, authRequest);
  }

  registerUser(user : any) : Observable<any> {
    console.log(user.userId + "::" + user.userName);
    console.log(`${this.apiURL}auth/addNewUser`);
    return this.httpClient.post<any>(`${this.apiURL}auth/addNewUser`, user);
  }
}
