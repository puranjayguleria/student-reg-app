import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router'
import { DetailproviderService } from '../detailprovider.service';
import { parse } from 'querystring';
@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent implements OnInit {
  public empdetails=[]
  public empid;
  constructor(private route:ActivatedRoute,private router:Router,private _detailprovider:DetailproviderService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=>
    {
        
        let id=parseInt(params.get('id'))
        
        this.empid=id;
        this.empdetails=this._detailprovider.getdetails();


        

    })
    
    //let name=String(this.route.snapshot.paramMap.get("name"))
    //let id=parseInt(this.route.snapshot.paramMap.get("id"))

    
  }
  onPrev()
  {
    this.router.navigate(['/student-details',(this.empid-1)%4])
    }

  onNext()
  {
    this.router.navigate(['/student-details',(this.empid+1)%4])
  }
  next()
  {
    this.router.navigate(['overview'],{relativeTo: this.route})
  }

  prev()
  {
    this.router.navigate(['contact'],{relativeTo: this.route})
  }

  compare(stringid,intid){
    let temp=parseInt(stringid);
    if(temp===intid){
      return true;
    }
    return false;
  }
  disableswitch(idd){
    if(idd===0){
      return true;
    }
    return false;

  }
}
