import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName : string ="";
  password : string ="";
  isAuthenticated = true;
  showMessage = false;
  successMsg = "";
  constructor(private _router: Router, private commonService : CommonServiceService) {
      if(commonService.userCreationMsg != "") {
        this.showMessage = true;
        this.successMsg = commonService.userCreationMsg;
      }
   }
  submit(){
    this.showMessage = false;
    this.successMsg = "";
    this.commonService.userCreationMsg = "";
    console.log("user name is " + this.userName);
    this.commonService.generateToken(this.userName, this.password).subscribe(
      response => {
        this.commonService.jwtToken = response.token;
        this.commonService.userRole = response.userRole;
        localStorage.setItem('token', this.commonService.jwtToken);
        console.log('Token is:', this.commonService.jwtToken);
        console.log('Role is:', this.commonService.userRole);
        this._router.navigate(['home']);
      });
    this.isAuthenticated = false;
    this.clear();
  }

  registerUser() {
    this._router.navigate(['register']);
  }

  clear(){
    this.userName ="";
    this.password = "";
  }
}
