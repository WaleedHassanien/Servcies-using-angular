import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() myEvent = new EventEmitter()

  users:Array<{name,age}>=[{name:"ahmed",age:23}]
  fname;
  age;
  addbtn(){
    let user={
      name:this.fname,
      age:this.age
    }

    this.users.push(user)
    this.myEvent.emit(this.users)
    console.log(user)
  }

}
