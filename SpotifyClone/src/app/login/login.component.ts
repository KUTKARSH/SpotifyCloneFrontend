import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private svc : DataService) { }

  login(){
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;
    console.log(email);
    console.log(password);
    this.svc.login(email,password)
    .subscribe(
        d => {
          console.log(d.userId);
          if(d.status == "Valid")
          {
            console.log("Valid user logged in");
            
          }
          else
          {
            console.log("Invalid user login");
          }
          sessionStorage.setItem("userId",d.userId);
        }
    );
  }

  ngOnInit(): void {
  }

}
