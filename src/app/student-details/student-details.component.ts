import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  name="Puranjay";
  email="test@gmail.com";
  Phone = "966031525";
  Roll = "1237";
  fathername = "Mr. Guleria";
  mothername = "Mrs. Guleria";
  designations=[{id:"1",name:"Puranjay",job:"coder"},{id:"2",name:"Pulkit",job:"developer"},{id:"3",name:"ishnav",job:"doctor"}]
  constructor(private router:Router) { }

  ngOnInit() {
  }

onSubmit(desg){

  this.router.navigate(['/student-details',desg.id,desg.job,desg.name])
}


}
