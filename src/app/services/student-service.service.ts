import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonServiceService } from './common-service.service';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  constructor(private httpClient : HttpClient, private commonService : CommonServiceService) { }

  headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer " + this.commonService.jwtToken
  });

  getStudentDetails(): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    };
    return this.httpClient.get(`${this.commonService.apiURL}student/studentDetails`, httpOptions);
  }

  addStudent (student: any): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    };
    console.log(student.studentId + ":: " + student.studentName);
    console.log(`${this.commonService.apiURL}student/saveDetails`);
    return this.httpClient.post<any>(`${this.commonService.apiURL}student/saveDetails`, student, httpOptions);
  }

  getStudentById(id: number): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    };
    return this.httpClient.get<any>(`${this.commonService.apiURL}student/find/${id}`, httpOptions);
  }

  updateStudent(id: number, student: any): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    }
    console.log(id+ ":: " + student.studentName);
    console.log(`${this.commonService.apiURL}student/update/${id}`);
    return this.httpClient.put<any>(`${this.commonService.apiURL}student/update/${id}`, student, httpOptions);
  }

  deleteStudent(id: number): Observable<any> {
    const httpOptions = {
      headers: this.headers_object
    }
    return this.httpClient.delete<any>(`${this.commonService.apiURL}student/delete/${id}`, httpOptions);
  }
  
}
