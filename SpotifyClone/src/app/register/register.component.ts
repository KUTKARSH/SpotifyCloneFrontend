import { Component, OnInit } from '@angular/core';
import {User} from './user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private svc : DataService) { }

  register(){
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;
    var user = new User();
    user.name  = name;
    user.email = email;
    user.password = password;
    console.log(name);
    console.log(email);
    console.log(password);
    this.svc.register(user)
    .subscribe(
        d => {
          console.log(d);
        }
    );
  }

  ngOnInit(): void {
  }

}
