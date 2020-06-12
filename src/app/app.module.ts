import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms'

import { AppComponent } from './app.component';
import{RegisterComponent}from  './commpent/register/register.component';
import{TableComponent}from './commpent/table/table.component';
import { StudentsComponent } from './commpent/students/students.component';
import { StudentDetailsComponent } from './commpent/student-details/student-details.component';
import { StudentItemComponent } from './commpent/student-item/student-item.component';
import { ErrorComponent } from './commpent/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddStudentComponent } from './commpent/add-student/add-student.component';
import { EditComponent } from './commpent/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TableComponent,
    StudentsComponent,
    StudentDetailsComponent,
    StudentItemComponent,
    ErrorComponent,
    AddStudentComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
