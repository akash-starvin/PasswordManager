import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      mobile: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10)]],
      mpin: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]],
      reEnterMpin: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]]
    
    });
  }
  signUpUser(){
    console.log("x",this.form.get('mobile').value);
    this.userService.addNewUser(this.form.get('mobile').value, this.form.get('mpin').value);
    this.router.navigate(['signIn']);
  }
  get mobile() {
    return this.form.get('mobile');
  }
  get mpin() {
    return this.form.get('mpin');
  }
  get reEnterMpin() {
    return this.form.get('reEnterMpin');
  }
}