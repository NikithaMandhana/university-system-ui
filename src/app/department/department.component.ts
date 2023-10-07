import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentServiceService } from '../services/department-service.service';
import { Department } from '../model/department';
import { CommonServiceService } from '../services/common-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departmentId: number = 0;
  departmentName: string = '';
  location : string = '';
  departments : Department[] = [];
  columnDisplayNameMap: { [key: string]: string } = {
    'departmentId': 'Department ID',
    'departmentName': 'Department Name',
    'location': 'Location'
  };
  displayedColumns: string[] = ['departmentId', 'departmentName', 'location'];
  dataSource = new MatTableDataSource(this.departments);
  userRole : string = "";

  constructor(private departmentService : DepartmentServiceService, private commonService : CommonServiceService){
    this.userRole = this.commonService.userRole;
    this.showDepartments();
  } 

  saveDepartment() {
    console.log(this.departmentId + " ::" +this.departmentName);
    let department = new Department(this.departmentId, this.departmentName, this.location);
    
    this.departmentService.addDepartment(department).subscribe(
      response => {
        console.log('Department details saved successfully:', response);
        this.showDepartments();
      })
  }

  getDepartmentById() {
    this.departmentService.getDepartmentById(this.departmentId).subscribe({
      next: (response) => {
          console.log("Department details : ");
          console.log(response.departmentId + "::" + response.departmentName + "::" + response.location);
      },
        error: (err) => {
          console.log("No Department found with this department Id!")
          console.log(err)
        }
      });
    }

    updateDepartment() {
      let updatedDepartment = new Department(this.departmentId, this.departmentName,this.location)
      this.departmentService.updateDepartment(this.departmentId, updatedDepartment).subscribe({
        next: (response) => {
          console.log("Department updated successfully!", response);
          this.showDepartments();
        },
        error: (err) => {
          console.log("No Department found with this department Id!")
          console.log(err)
        }
        });
    }

    deleteDepartment() {
      this.departmentService.deleteDepartment(this.departmentId).subscribe({
        next: (response) => {
            console.log("Department deleted successfully!");
            this.showDepartments();
        },
        error: (err) => {
          console.log("No Department found with this department Id!")
          console.log(err)
        }
        });
    }

    showDepartments() {
      this.departmentService.getAllDepartment().subscribe (
        response => {
          console.log(response);
          this.departments = response;
          this.dataSource = new MatTableDataSource(this.departments);
        });
    }

    ngAfterViewInit() {}
    ngOnInit(): void {}
}
