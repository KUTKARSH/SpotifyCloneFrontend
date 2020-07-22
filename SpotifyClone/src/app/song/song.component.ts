import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  data : Array<any>;
  name : String;
  constructor(private svc : DataService) {
      svc.fetchSongsData()
      .subscribe(
          d => {
            console.log(d);
            console.log(d[0].name);
            this.data = d;
          }
      );
      
   }

  ngOnInit(): void {
  }

}
