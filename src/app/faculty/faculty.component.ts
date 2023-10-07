import { Component } from '@angular/core';
import { FacultyServiceService } from '../services/faculty-service.service';
import { AdminServiceService } from '../services/admin-service.service';
import { Faculty } from '../model/faculty';
import { Department } from '../model/department';
import { DepartmentServiceService } from '../services/department-service.service';
import { CommonServiceService } from '../services/common-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
    facultyId : number = 0;
    facultyName : string = '';
    specialization : string = '';
    age : number = 0;
    gender : string = '';
    mobileNumber : number = 0;
    designation : string = '';
    department : any;
    departments : Department[] = [];
    faculties : Faculty[] = [];
    userRole : string = "";

    columnDisplayNameMap: { [key: string]: string } = {
      'facultyId': 'Faculty ID',
      'facultyName': 'Faculty Name',
      'specialization': 'Specializtion',
      'age': 'Age',
      'gender' : 'Gender',
      'mobileNumber' : 'Mobile Number',
      'designation': 'Designation',
      'department': 'Department'
    };

    displayedColumns: string[] = ['facultyId', 'facultyName', 'specialization', 'age', 
    'gender', 'mobileNumber', 'designation', 'department'];
    dataSource = new MatTableDataSource(this.faculties);

    constructor(private facultyService : FacultyServiceService, private commonService : CommonServiceService, private departmentService : DepartmentServiceService) {
      this.userRole = this.commonService.userRole;
      this.loadDepartments();
      this.showFaculties();
    }

    saveFaculty() {
      console.log(this.facultyId + "::" + this.facultyName + "::" + this.specialization + "::" + this.age + "::" + 
      this.gender + "::" + this.mobileNumber + "::" + this.designation + "::" + this.department);

      let faculty =  new Faculty(this.facultyId, this.facultyName, this.specialization, this.age, this.gender,
        this.mobileNumber, this.designation, this.department);

      this.facultyService.addFaculty(faculty).subscribe(
        response => {
          console.log('Faculty saved successfully:', response);
          this.showFaculties();
        });
    }

    getFacultyById() {
      this.facultyService.getFacultyById(this.facultyId).subscribe({
        next: (response) => {
            console.log("Faculty details : ");
            console.log(response.facultyId + "::" + response.facultyName + "::" + response.specialization + "::" + 
            response.age + "::" +  response.gender + "::" + response.mobileNumber + "::" + response.designation +
            "::" + response.department.departmentName);
          },
          error: (err) => {
            console.log("No Faculty found with this faculty Id!")
            console.log(err)
          }
        });
    }

    updateFaculty() {
      let updatedFaculty = new Faculty(this.facultyId, this.facultyName, this.specialization, this.age, this.gender, this.mobileNumber, this.designation, this.department);

      this.facultyService.updateFaculty(this.facultyId, updatedFaculty).subscribe({
        next: (response) => {
          console.log("Faculty updated successfully!", response);
          this.showFaculties();
        },
        error: (err) => {
          console.log("No Faculty found with this faculty Id!")
          console.log(err)
        }
        });
    }

    deleteFaculty() {
      this.facultyService.deleteFaculty(this.facultyId).subscribe({
        next: (response) => {
            console.log("Faculty deleted successfully!");
            this.showFaculties();
        },
        error: (err) => {
          console.log("No Faculty found with this faculty Id!")
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
  
    showFaculties() {
      this.facultyService.getFacultyDetails().subscribe (
        response => {
          console.log(response);
          this.faculties = response;
          this.dataSource = new MatTableDataSource(this.faculties);
        }
      )
    }

    ngAfterViewInit() {}
    ngOnInit(): void {}
}
