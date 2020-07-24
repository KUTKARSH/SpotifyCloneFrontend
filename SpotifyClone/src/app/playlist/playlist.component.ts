import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  data : Array<any>;
  songs : Array<String>;

  playlistMenu : Boolean;

  loadSongsData(id : String){
    this.playlistMenu = true;
    this.svc.fetchSongDataOfPlaylist(id)
    .subscribe(
        d => {
          console.log(d);
          this.songs = d;
        }
    );
  }

  constructor(private svc : DataService) {
    this.playlistMenu = false;
    let userId : String = sessionStorage.getItem("userId");
    if(userId == "-1")
    {
      console.log("User not logged in");
      window.alert("User not logged in");
    }
    
    else
    {
      svc.fetchPlaylistData(userId)
      .subscribe(
          d => {
            console.log(d);
            console.log(d[0].name);
            this.data = d;
          }
      );
    }  
    
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
