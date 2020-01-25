import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router'
@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {
  public empjob;
  public empname;
  public empid;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=>
    {
        let name=(String)(params.get('name'))
        let id=parseInt(params.get('id'))
        let job=String(params.get("job"))
        this.empid=id
        this.empjob=job
        this.empname=name
    })
    //let name=String(this.route.snapshot.paramMap.get("name"))
    //let id=parseInt(this.route.snapshot.paramMap.get("id"))

    
  }
  onPrev()
  {
    this.router.navigate(['/student-details',this.empid-1,this.empjob,this.empname])
    }

  onNext()
  {
    this.router.navigate(['/student-details',this.empid+1,this.empjob,this.empname])
  }

}
