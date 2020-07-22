import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  data : Array<any>;
  constructor(private svc : DataService) {
      svc.fetchPlaylistData()
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
