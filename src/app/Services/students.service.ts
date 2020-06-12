import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  constructor(private client:HttpClient) { }
  private baseUrl="http://localhost:3000/students";
  addMsg =false
  editMsg=false
  deleteMsg=false

  getAllStudents(){
    return this.client.get(this.baseUrl)
  }
getStudentById(id)
{
  return this.client.get(`${this.baseUrl}/${id}`)
}
DeleteStudent(id)
{
  return this.client.delete(`${this.baseUrl}/${id}`)
}
addStudent(student)
{
  return this.client.post(this.baseUrl,student)
}
updateStudent(id,student){
return  this.client.put(`${this.baseUrl}/${id}`,student);
}
}
