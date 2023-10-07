import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from './services/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'university-ui';
  userRole : string = this.commonService.userRole;
  constructor(private router: Router, private commonService : CommonServiceService) {
  }
}
