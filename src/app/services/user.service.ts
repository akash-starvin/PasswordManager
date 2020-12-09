import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  serviceMobile: number;
  serviceMpin: number;

  addNewUser(mobile: number, mpin: number)
  {
    this.serviceMobile = mobile;
    this.serviceMpin = mpin;
    console.log("Added",  this.serviceMobile);
    
  }
  checkUserExists(mobile: number, mpin: number):boolean
  {
    if(this.serviceMobile == mobile && this.serviceMpin == mpin)
    {
      console.log("Service","User Exists");
      return true;
    }
    else{
      console.log("Service","User Doesn't Exists");
      return false;
    }
  }
}
