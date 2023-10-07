import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../services/common-service.service';
import { User } from '../model/user';
import { Role } from '../model/role';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent {

  userName : string ="";
  password : string ="";
  userId : number=0;
  emailId : string = "";
  userRole : string = "";
  userRoles: Role[] = [
    { id: 'USER_ADMIN', name: 'Admin' },
    { id: 'USER_FACULTY', name: 'Faculty' },
    { id: 'USER_STUDENT', name: 'Student' },
  ];
 
  constructor(private router: Router, private commonService : CommonServiceService) { }
  createUser() {
    alert(this.userRole);
    console.log(this.userId + "::" + this.userName + "::" + this.emailId + "::" + this.password);
    let user = new User(this.userId, this.userName, this.emailId, this.password, this.userRole);
    this.commonService.registerUser(user).subscribe(
      response => {
        console.log('User saved successfully:', response);
        this.commonService.userCreationMsg = "User Added Successfully";
        this.router.navigate(['']);
    });
  }
}
