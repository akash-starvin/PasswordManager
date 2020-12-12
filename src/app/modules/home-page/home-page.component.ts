import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { PopUpComponent } from '../pop-up/pop-up.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private dialog: MatDialog, private userService: UserService){}
  sitesCollection = []

  ngOnInit(): void {
    this.loadSitesCollection();
  }
  openAddSitePopUp()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    this.dialog.open(PopUpComponent, dialogConfig);
  }
  loadSitesCollection(){
    this.sitesCollection = this.userService.getSiteCollection();
  }

  editSiteDetail(i, item){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    //dialogConfig.data = item;
    this.dialog.open(PopUpComponent, dialogConfig)
  }

  copyPasswordToClipBoard(password: string){
    console.log("x",password);
    //this.clipboard.writeText(password);
  }
}
