import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatDialogRef } from "@angular/material/dialog";
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private dailogRef: MatDialogRef<HomePageComponent>) {}


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      siteUrl: ['', Validators.required],
      siteName: ['', Validators.required],
      //sector: ['', Validators.required],
      userName: ['', Validators.required],
      sitePassword: ['', Validators.required],
      notes: ['', Validators.required]
    });
  }
  get siteUrl() {
    return this.form.get('siteUrl');
  }
  get siteName() {
    return this.form.get('siteName');
  }
  // get sector() {
  //   return this.form.get('sector');
  // }
  get userName() {
    return this.form.get('userName');
  }
  get sitePassword() {
    return this.form.get('sitePassword');
  }
  get notes() {
    return this.form.get('notes');
  }
  resetForm(){
    this.form.reset({
      siteUrl: "",
      siteName: "",
      //sector: "", 
      userName: "",
      password: "",
      notes: ""
    });
  }
  saveSite(){

    this.userService.addSiteToCollection(
      this.form.get('siteUrl').value,
      this.form.get('siteName').value,
      "Social Media",
      this.form.get('userName').value,
      this.form.get('sitePassword').value,
      this.form.get('notes').value
    );

    this.resetForm();
    this.closePopUP();
  }
  closePopUP(){
    this.resetForm();
    //this.initializeFormGroup;
    this.dailogRef.close();
  }
}
