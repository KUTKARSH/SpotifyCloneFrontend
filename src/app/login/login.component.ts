import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {LoginClass} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginStatus : Boolean;

  constructor(private svc : DataService) { 
    this.loginStatus = true;
  }

  login(){
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;
    console.log(email);
    console.log(password);
    this.svc.login(email,password)
    .subscribe(
        (d : LoginClass) => {
          var name = d.name;
          console.log(d.userId);
          console.log(d.name);
          if(d.status == "Valid")
          {
            console.log("Valid user logged in");
            var userId = d.userId;
            sessionStorage.setItem("userId",String(userId));
            alert("Login successfull");
            this.loginStatus = false;
          }
          else
          {
            console.log("Invalid user login");
            var userId = d.userId;
            sessionStorage.setItem("userId",String(userId));
            alert("Login unsuccessfull");
          }
        }
    );
  }

  ngOnInit(): void {
  }

}
