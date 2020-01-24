import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student-r',
  templateUrl: './add-student-r.component.html',
  styleUrls: ['./add-student-r.component.css']
})
export class AddStudentRComponent implements OnInit {
  constructor(private fb: FormBuilder){}
  registerationForm=this.fb.group({
    username:['puranjay',Validators.required],
    password:['', Validators.required],
    confirmpassword:['',Validators.required],
    address: this.fb.group({
      city:['',Validators.required],
      state:['',Validators.required],
      country:['',Validators.required]
    })


  });
  
  
  
 
 

  ngOnInit() {
  }
  loadData(){
      this.registerationForm.patchValue({
        username: 'none',
        password:'hasnoface',
        



      })

  }

}
