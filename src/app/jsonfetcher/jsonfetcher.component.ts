import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-jsonfetcher',
  templateUrl: './jsonfetcher.component.html',
  styleUrls: ['./jsonfetcher.component.css']
})
export class JsonfetcherComponent implements OnInit {

  constructor(private emp:EmployeeServiceService) { }
 public persondata
  ngOnInit() {
    
      this.emp.getData().subscribe((data) => {
         this.persondata = Array.from(Object.keys(data), k=>data[k]);
         console.log(this.persondata);
      });
  }

}
