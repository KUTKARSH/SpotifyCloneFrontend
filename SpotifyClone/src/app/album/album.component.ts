import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  data : Array<any>;
  songs : Array<any>;
  albumMenu : Boolean;

  loadSongsData(id : String){
    this.albumMenu = true;
    this.svc.fetchSongDataOfAlbum(id)
    .subscribe(
        d => {
          console.log(d);
          this.songs = d;
        }
    );
  }

  constructor(private svc : DataService) {
    this.albumMenu = false;  
    svc.fetchAlbumData()
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
