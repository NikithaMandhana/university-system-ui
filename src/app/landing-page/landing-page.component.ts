import { Component } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  userRole : string = "";
  constructor(private commonService : CommonServiceService){
    this.userRole = this.commonService.userRole;
  }
}
