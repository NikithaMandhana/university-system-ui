import { Component } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
import { Admin } from '../model/admin';
import { StudentServiceService } from '../services/student-service.service';
import { Student } from '../model/student';
import { DepartmentServiceService } from '../services/department-service.service';
import { FacultyServiceService } from '../services/faculty-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  students: any[] = []; // Define the students array to hold fetched student details
  faculties: any[] = []; 
  departments: any[] = []; 
  showRegister: boolean = false;
  showSignIn: boolean = false;
  userRegistered: boolean = false;
  userId : number = 0;
  userName : string = '';
  emailId : string = '';
  password : string = '';

  constructor(private adminService : AdminServiceService, private studentService : StudentServiceService,
    private facultyService : FacultyServiceService, private departmentService : DepartmentServiceService) {}
  
  fetchStudentDetails() {
    this.studentService.getStudentDetails().subscribe(
      (data) => {
        this.students = data;
      },
      (error) => {
        console.error('Error fetching student details:', error);
      }
    );
  }

  fetchFacultyDetails() {
    this.facultyService.getFacultyDetails().subscribe(
      (data) => {
        this.faculties = data;
      },
      (error) => {
        console.error('Error fetching faculty details:', error);
      }
    );
  }

  fetchDepartmentDetails() {
    this.departmentService.getDepartmentDetails().subscribe(
      (data) => {
        this.departments = data;
      },
      (error) => {
        console.error('Error fetching department details:', error);
      }
    );
  }

  toggleRegister() {
    this.showRegister = true;
    this.showSignIn = false;
  }

  toggleSignIn() {
    this.showSignIn = true;
    this.showRegister = false;
  }

  registerUser() {
    console.log(this.userId + "::" + this.userName + "::" + this.emailId + "::" + this.password);
    let admin = new Admin(this.userId, this.userName, this.emailId, this.password);
    this.adminService.registerUser(admin).subscribe(
      response => {
        console.log('User saved successfully:', response);
        this.userRegistered = true;
      });
  }

}
