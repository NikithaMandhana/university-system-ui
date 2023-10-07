import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonServiceService } from './common-service.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {
  constructor(private httpClient : HttpClient, private commonService : CommonServiceService) { } 

  headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer " + this.commonService.jwtToken
  });

  getDepartmentDetails(): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    };
    return this.httpClient.get(`${this.commonService.apiURL}department/departmentDetails`, httpOptions);
  }

  getAllDepartment(): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    };
    return this.httpClient.get(`${this.commonService.apiURL}department/departments`, httpOptions);
  }

  addDepartment (department: any): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    };
    console.log(department.departmentId + "::: " + department.departmentName);
    console.log(`${this.commonService.apiURL}department/saveDetails`);
    return this.httpClient.post<any>(`${this.commonService.apiURL}department/saveDetails`, department, httpOptions);
  }
  
  getDepartmentById(id: number): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    };
    return this.httpClient.get<any>(`${this.commonService.apiURL}department/find/${id}`, httpOptions);
  }

  updateDepartment(id: number, department: any): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    };
    console.log(id+ ":: " + department.location);
    return this.httpClient.put<any>(`${this.commonService.apiURL}department/update/${id}`, department, httpOptions);
  }

  deleteDepartment(id: number): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    };
    return this.httpClient.delete<any>(`${this.commonService.apiURL}department/delete/${id}`, httpOptions);
  }

}
