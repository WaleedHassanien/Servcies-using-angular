import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styles: [
  ]
})
export class AddStudentComponent implements OnInit {

  constructor(private router: Router, private myService:StudentsService) { }

  ngOnInit(): void {
  }
  register(form: NgForm) {
    if (form.valid) {
      this.myService.addStudent(form.value).subscribe(
        (respnse) => {
          this.router.navigate(['students'])
        },
        (err) => {
          console.log(err)
        }
      )
      console.log(form.value)
    }
  }

}
