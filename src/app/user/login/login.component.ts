import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // onsubmit()
  
}
