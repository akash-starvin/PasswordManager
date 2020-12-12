import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private router:Router, private userService: UserService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mobile: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10)]],
      mpin: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]],    
    });
  }
  loginUser()
  {
    console.log("x",this.form.get('mobile').value);
    if(this.userService.checkUserExists(this.form.get('mobile').value, this.form.get('mpin').value))
    { 
      this.router.navigate(['navigationMenu']);
    }
  }
  moveToSignUP()
  {
    this.router.navigate(['signUp']);
  }
  get mobile() {
    return this.form.get('mobile');
  }
  get mpin() {
    return this.form.get('mpin');
  }
  
}
