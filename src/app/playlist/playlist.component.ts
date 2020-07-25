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

  create(){
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let songs = (<HTMLInputElement>document.getElementById("songs")).value;
    console.log(name);
    console.log(songs);
    this.svc.createPlaylist(name,songs).
    subscribe(
        d => {
          console.log(d);
        }
    );
    this.svc.fetchPlaylistData(sessionStorage.getItem("userId"))
    .subscribe(
        d => {
          console.log(d);
          console.log(d[0].name);
          this.data = d;
        }
    );

  }

  remove(){
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    console.log(name);
    this.svc.deletePlaylist(name).
    subscribe(
        d => {
          console.log(d);
        }
    );
    this.svc.fetchPlaylistData(sessionStorage.getItem("userId"))
    .subscribe(
        d => {
          console.log(d);
          console.log(d[0].name);
          this.data = d;
        });
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
