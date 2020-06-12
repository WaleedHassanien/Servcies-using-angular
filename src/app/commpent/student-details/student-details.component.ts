import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit,OnDestroy {
subscriber;
student;
  constructor(private myservice:StudentsService,private activiedRoute:ActivatedRoute,private _router: Router) { }
  goEdit(){
    this._router.navigateByUrl(`/edit/${this.activiedRoute.snapshot.params.id}`)
  }
  DeleteFromApi(){
    if (confirm("Are You Sure To Delete this Informations")) {  
      this.myservice.DeleteStudent(this.activiedRoute.snapshot.params.id).subscribe(  
       (student) => {  
        this.myservice.deleteMsg=true
        this._router.navigate(['students'])
       }  
      );  
     } 

  }

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
  ngOnDestroy(): void {
    this.subscriber.unsubscribe()

  }

}
