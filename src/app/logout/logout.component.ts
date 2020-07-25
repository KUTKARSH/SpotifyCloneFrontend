import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  logStatus : Boolean;

  constructor() { 
    this.logStatus = true;
  }

  logout(){
    sessionStorage.setItem("userId","-1");
    window.alert("Logged out");
    this.logStatus = false;
  }

  ngOnInit(): void {
  }

}
