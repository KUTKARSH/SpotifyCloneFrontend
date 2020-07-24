import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  data : Array<any>;
  
  
  audio : any;

  constructor(private svc : DataService) {
    this.audio = new Audio();
    
      svc.fetchSongsData()
      .subscribe(
          d => {
            console.log(d);
            console.log(d[0].name);
            this.data = d;
          }
      );
      
   }
   name : String;
   status :Boolean;
   play(name : String){
    this.status = true;
    this.svc.play(name);
   }

   pause(){
      this.status = false;
      this.svc.pause();
   }

  ngOnInit(): void {
  }

}
