import { Component, OnInit } from '@angular/core';
import { User } from './add-student.interface';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})


export class AddStudentComponent implements OnInit {
    user: User = {
      name:"puranjay",
      account: {
        email:'',
        Password:''
      },
      gender:"male"
    }

    onSubmit({ value, valid }: { value: User, valid: boolean }) {
      console.log(value, valid);
    }
  
  constructor() { }

  ngOnInit() {
  }

}
