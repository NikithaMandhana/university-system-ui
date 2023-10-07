import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { StudentServiceService } from '../services/student-service.service';
import { Student } from '../model/student';
import { Department } from '../model/department';
import { DepartmentServiceService } from '../services/department-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentId: number = 0;
  studentName: string = '';
  fatherName : string = '';
  age : number = 0;
  gender : string = '';
  mobileNumber : number = 0;
  enrollmentYear : number = 0;
  department : any;
  departments : Department[] = [];
  students : Student[] = [];
  columnDisplayNameMap: { [key: string]: string } = {
    'studentId': 'Student ID',
    'studentName': 'Student Name',
    'fatherName': 'Father Name',
    'age': 'Age',
    'gender': 'Gender',
    'mobileNumber': 'Mobile Number',
    'enrollmentYear': 'Year of Enrollment',
    'department': 'Department'
  };
  displayedColumns: string[] = ['studentId', 'studentName', 'fatherName', 'age', 'gender', 'mobileNumber', 'enrollmentYear', 'department'];
  dataSource = new MatTableDataSource(this.students);
  userRole : string = "";

  constructor(private studentService : StudentServiceService, private commonService : CommonServiceService, private departmentService : DepartmentServiceService) {
    this.userRole = this.commonService.userRole;
    this.loadDepartments();
    this.showStudents();
  } 

  saveStudent() {
    let student = new Student(this.studentId, this.studentName, this.fatherName, this.age, this.gender, 
      this.mobileNumber, this.enrollmentYear, this.department);

    console.log(this.studentId + " ::" + this.studentName + "::" + this.fatherName + 
    "::" + this.age + "::" + this.gender + "::" + this.mobileNumber + "::" + this.enrollmentYear +
    "::" + this.department);
    
    this.studentService.addStudent(student).subscribe(
      response => {
        console.log('Student saved successfully:', response);
        this.showStudents();
      });
    }

  getStudentById() {
    this.studentService.getStudentById(this.studentId).subscribe({
      next: (response) => {
        console.log("Student details : ");
        console.log(response.studentId + "::" + response.studentName + "::" + response.fatherName +
        "::" + response.age + "::" + response.gender + "::" + response.mobileNumber + "::" +
        response.enrollmentYear + "::" + response.department.departmentName);
      },
      error: (err) => {
        console.log("No Student found with this student Id!")
        console.log(err)
      }
    });
  }

  updateStudent() {
    let student = new Student(this.studentId, this.studentName, this.fatherName, this.age, this.gender, this.mobileNumber, this.enrollmentYear, this.department);
    this.studentService.updateStudent(this.studentId, student).subscribe({
      next: (response) => {
        console.log('Student updated successfully:', response);
        this.showStudents();
      },
      error: (err) => {
        console.log("No Student found with this student Id!")
        console.log(err)
      }
      });
  }

  deleteStudent() {
    this.studentService.deleteStudent(this.studentId).subscribe({
      next: (response) => {
        console.log("Student deleted successfully!");
        this.showStudents();
      },
      error: (err) => {
        console.log("No Student found with this student Id!")
        console.log(err)
      }
    });
  }

  loadDepartments() {
    this.departmentService.getAllDepartment().subscribe (
      response => {
        console.log(response);
        this.departments = response;
      });
  }

  showStudents() {
    this.studentService.getStudentDetails().subscribe (
      response => {
        console.log(response);
        this.students = response;
        this.dataSource = new MatTableDataSource(this.students);
      }
    )
  }

  ngAfterViewInit() {}
  ngOnInit(): void {}
}
