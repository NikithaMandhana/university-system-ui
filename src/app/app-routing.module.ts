import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdminComponent } from './admin/admin.component';
import { DepartmentComponent } from './department/department.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterationComponent } from './registeration/registeration.component';

const routes: Routes = [
  {path :'', component : LoginComponent},
  {path :'admin', component : AdminComponent},
  {path : 'department', component : DepartmentComponent},
  {path : 'student', component : StudentComponent },
  {path :'faculty', component : FacultyComponent},
  {path :'home', component : LandingPageComponent},
  {path :'payment', component : PaymentComponent},
  {path :'register', component : RegisterationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
