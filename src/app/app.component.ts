import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from './Services/students.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myfixedproject';
  constructor(private router: Router, private myService:StudentsService) { }

  myData
  recive(data){
    this.myData=data
  }
  register(form: NgForm) {
    if (form.valid) {
      this.myService.addStudent(form.value).subscribe(
        (respnse) => {
          console.log(respnse)
          $('#regBtn').attr('data-dismiss', 'modal');

        },
        (err) => {
          console.log(err)
        }
      )
      console.log(form.value)
    }
  }
 
}
