import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent implements OnInit {
student;
subscriber
constructor(private myservice:StudentsService,private activiedRoute:ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {
    this.subscriber=this.myservice.getStudentById(this.activiedRoute.snapshot.params.id).subscribe
    (
      (data)=>
      {
        this.student=data;
        console.log(this.student)
      },
      (error)=>
      {
        console.log(error);
        
      }
    )
  }
  Edit(editForm:NgForm){
    if(editForm.valid)
    {
      this.subscriber=this.myservice.updateStudent(this.activiedRoute.snapshot.params.id,editForm.value).subscribe
      (
        (Response)=>{
          console.log(Response)
          this._router.navigate(['/students'])
        },
        (err) => {
          console.log(err)
        }

      )
    }
  }

}
