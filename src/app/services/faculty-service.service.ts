import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonServiceService } from './common-service.service';

@Injectable({
  providedIn: 'root'
})
export class FacultyServiceService {
  constructor(private httpClient : HttpClient, private commonService : CommonServiceService) { }

  headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer " + this.commonService.jwtToken
  });

  getFacultyDetails(): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    };
    return this.httpClient.get(`${this.commonService.apiURL}faculty/facultyDetails`, httpOptions);
  }

  addFaculty(faculty : any) : Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    };
    console.log(httpOptions);
    console.log(faculty.facultyId + "::" + faculty.facultyName);
    console.log(`${this.commonService.apiURL}faculty/save`);
    return this.httpClient.post<any>(`${this.commonService.apiURL}faculty/save`, faculty, httpOptions);
  }
  
  getFacultyById(id: number): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    };
    return this.httpClient.get<any>(`${this.commonService.apiURL}faculty/find/${id}`, httpOptions);
  }

  updateFaculty(id: number, faculty: any): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    };
    console.log(id+ ":: " + faculty.designation);
    return this.httpClient.put<any>(`${this.commonService.apiURL}faculty/update/${id}`, faculty, httpOptions);
  }

  deleteFaculty(id: number): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    };
    return this.httpClient.delete<any>(`${this.commonService.apiURL}faculty/delete/${id}`, httpOptions);
  }
  
}
