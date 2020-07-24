import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  followedArtists : Array<any>;
  unfollowedArtists : Array<any>;
  songs : Array<any>;
  artistMenu : Boolean;
  songId : String;

  loadSongsData(id : String){
    this.songId = id;
    this.artistMenu = true;
    this.svc.fetchSongDataOfArtist(id)
    .subscribe(
        d => {
          // console.log(d);
          this.songs = d;
        }
    );
  }

  constructor(private svc : DataService) { 
    this.artistMenu = false;
    let userId : String = sessionStorage.getItem("userId");
    if(userId == "-1")
    {
      console.log("User not logged in");
      window.alert("User not logged in");
    }
    else
    {
      svc.fetchFollowedArtistData(userId)
      .subscribe(
          d => {
            console.log(d);
            console.log(d[0].name);
            this.followedArtists = d;
          }
      );

      svc.fetchUnfollowedArtistData(userId)
      .subscribe(
          d => {
            console.log(d);
            console.log(d[0].name);
            this.unfollowedArtists = d;
          }
      );
    }
    
  }

  subscribeClick(id : String) {
    this.svc.follow(id,sessionStorage.getItem("userId"))
    .subscribe(
      d => {
        // console.log("Follow api response");
        // console.log(d);
        
      }
  );
    this.svc.fetchFollowedArtistData(sessionStorage.getItem("userId"))
    .subscribe(
        d => {
          console.log(d);
          console.log(d[0].name);
          this.followedArtists = d;
        }
    );

    this.svc.fetchUnfollowedArtistData(sessionStorage.getItem("userId"))
    .subscribe(
        d => {
          console.log(d);
          console.log(d[0].name);
          this.unfollowedArtists = d;
        }
    );
  }

  unsubscribeClick(id : String){
    this.svc.unfollow(id,sessionStorage.getItem("userId"))
    .subscribe(
      d => {
        // console.log("Unollow api response");
        // console.log(d);
        
      });
    this.svc.fetchFollowedArtistData(sessionStorage.getItem("userId"))
    .subscribe(
        d => {
          console.log(d);
          console.log(d[0].name);
          this.followedArtists = d;
        }
    );

    this.svc.fetchUnfollowedArtistData(sessionStorage.getItem("userId"))
    .subscribe(
        d => {
          console.log(d);
          console.log(d[0].name);
          this.unfollowedArtists = d;
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

   back(){
     this.artistMenu = false;
     console.log("Back clicked");
   }

  ngOnInit(): void {
  }

}
