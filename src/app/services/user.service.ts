import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  serviceMobile: number;
  serviceMpin: number;
  // serviceMobile = 9902282989;
  // serviceMpin = 1111;

  // sitesCollection: {
  //   siteUrl: string,
  //   siteName: string,
  //   sector: string,
  //   userName: string,
  //   sitePassword: string,
  //   notes: string;
  // }[] = [];
  sitesCollection: {
    siteUrl: string,
    siteName: string,
    sector: string,
    userName: string,
    sitePassword: string,
    notes: string;
  }[] = [
    {
      "siteUrl": "www.facebook.com",
      "siteName": "Facebook",
      "sector": "0",
      "userName": "user@facebook.com",
      "sitePassword": "12345",
      "notes": "xyz"
    },
    {
      "siteUrl": "www.facebook.com",
      "siteName": "Facebook",
      "sector": "0",
      "userName": "user@facebook.com",
      "sitePassword": "54321",
      "notes": "xyz"
    },
    {
      "siteUrl": "www.facebook.com",
      "siteName": "Facebook",
      "sector": "0",
      "userName": "user@facebook.com",
      "sitePassword": "12345",
      "notes": "xyz"
    },
    {
      "siteUrl": "www.facebook.com",
      "siteName": "Facebook",
      "sector": "0",
      "userName": "user@facebook.com",
      "sitePassword": "12345",
      "notes": "xyz"
    },
    {
      "siteUrl": "www.facebook.com",
      "siteName": "Facebook",
      "sector": "0",
      "userName": "user@facebook.com",
      "sitePassword": "12345",
      "notes": "xyz"
    }
  ];
  getSiteCollection() : any{
    return this.sitesCollection;
  }
//   userTestStatus: { id: number, name: string }[] = [
//     { "id": 0, "name": "Available" },
//     { "id": 1, "name": "Ready" },
//     { "id": 2, "name": "Started" }
// ];

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
  
  // sitesCollection: {
  //   siteUrl: string,
  //   siteName: string,
  //   sector: string,
  //   userName: string,
  //   sitePassword: string,
  //   notes: string;
  // }[] = [];
  addSiteToCollection(siteUrl: string, siteName: string, sector: string, userName: string, sitePassword: string, notes: string):void
  {
    this.sitesCollection.push({siteUrl, siteName, sector, userName, sitePassword, notes});
  }
  
}
