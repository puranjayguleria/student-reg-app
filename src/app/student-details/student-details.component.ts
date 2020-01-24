import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
