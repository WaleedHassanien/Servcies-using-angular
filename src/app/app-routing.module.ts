import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule, Route,} from '@angular/router'
import { StudentsComponent } from './commpent/students/students.component';
import { StudentDetailsComponent } from './commpent/student-details/student-details.component';
import { ErrorComponent } from './commpent/error/error.component';
import { AddStudentComponent } from './commpent/add-student/add-student.component';
import { EditComponent } from './commpent/edit/edit.component';


const routes:Array<Route>=[
  {path:"",redirectTo:"students",pathMatch:"full"},
  {path:"students",component:StudentsComponent},
  {path:"students/:id",component:StudentDetailsComponent},
  {path:"add-student",component:AddStudentComponent},
  {path:"edit/:id",component:EditComponent},


  {path:"**",component:ErrorComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
