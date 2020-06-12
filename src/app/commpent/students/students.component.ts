import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent implements OnInit,OnDestroy {
  subscriber;
  students;

  constructor(private myservice:StudentsService) { }
 

  ngOnInit(): void {
    this.subscriber=this.myservice.getAllStudents().subscribe
    (
      (data)=>{
        console.log(data) 
        this.students=data;
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }

}
