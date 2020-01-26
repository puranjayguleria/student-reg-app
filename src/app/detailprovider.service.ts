import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailproviderService {

  constructor() { }

getdetails(){
  return [{id:"1",name:"Puranjay",job:"coder"},{id:"2",name:"Pulkit",job:"developer"},{id:"3",name:"ishnav",job:"doctor"}]
}

}
