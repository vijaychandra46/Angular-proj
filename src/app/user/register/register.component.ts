import { Component, OnInit} from '@angular/core';
import { UserService } from "../service/user.service";
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
showSucessMessage: boolean;
serverErrorMessage: String;
  formBuilder: any;

  constructor(public userService: UserService,
              private FormBuilder: FormBuilder) { }

  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: [],
      name: ['',Validators.required],
      mobile: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
    });
  }
  onSubmit(){
    console.log('form submission is working');
  }
  
}