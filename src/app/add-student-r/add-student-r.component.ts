import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidationErrors,ValidatorFn, AbstractControl} from '@angular/forms';


function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('password');
  const confirmControl = c.get('confirmpassword');
  
  if (emailControl.pristine || confirmControl.pristine) {
  return null;
  }
  if (emailControl.value === confirmControl.value) {
  return null;
  }
  return { noji: true };
 }
 @Component({
  selector: 'app-add-student-r',
  templateUrl: './add-student-r.component.html',
  styleUrls: ['./add-student-r.component.css']
})

export class AddStudentRComponent implements OnInit {
  constructor(private fb: FormBuilder){}
  registerationForm: FormGroup;
  errorMsg:string;
  errorPwdMsg:string;

   

  ngOnInit() {
   this.registerationForm=this.fb.group({
      username:['puranjay',Validators.required],
      emailGroup: this.fb.group({
        password: ['', [Validators.required]],
        confirmpassword: ['', Validators.required],
        }, { validator: emailMatcher }),
      address: this.fb.group({
        city:['',Validators.required],
        state:['',Validators.required],
        country:['',Validators.required]
      })
    });

   
  }
  loadData(){
      this.registerationForm.patchValue({
        username: 'none',
        password:'hasnoface'
      });
  }

 
}
