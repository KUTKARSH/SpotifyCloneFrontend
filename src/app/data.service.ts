import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  audio : any;
  songMap : any;
  // url : String = "http://localhost:8080";
  url :String = "https://spotify-clone-chubb.herokuapp.com";

  constructor(private httpClient : HttpClient){
      this.audio = new Audio();
      this.songMap = new Map();
      this.songMap.set("MYSTIFY","dekhte.mp3");
      this.songMap.set("GODSPEED","gungroo.mp3");
      this.songMap.set("VENOM","ipl.mp3");
      this.songMap.set("MISTAKEN","jai.mp3");
      this.songMap.set("POWER","shiv.mp3");
      this.songMap.set("PUNCH","urvashi.mp3");
      this.songMap.set("AIRPORT","tu meri.mp3");
      this.songMap.set("VENICE","mai tera.mp3");
      this.songMap.set("CITYLIGHT","raabta.mp3");
  }

  play(name : String){
    name = this.songMap.get(name);
    this.audio.src = "../../../assets/audio/" + name;
    this.audio.load();
    this.audio.play();
   }

   pause(){
    this.audio.pause();
 }

  fetchSongsData() : any{
      return this.httpClient.get( this.url + "/song/");
  }

  fetchPlaylistData(userId : String) : any{
    return this.httpClient.get( this.url + "/playlist/byUser/" + userId);
  }

  fetchAlbumData() : any{
    return this.httpClient.get( this.url + "/album/");
  }

  fetchFollowedArtistData(id : String) : any{
    console.log("follow data api called for" + id);
    return this.httpClient.get( this.url + "/artist/userFollowed/" + id);
  }

  fetchUnfollowedArtistData(id : String) : any{
    console.log("unfollow data api called for" + id);
    return this.httpClient.get( this.url + "/artist/userUnfollowed/" + id);
  }

  fetchUserData() : any{
    return this.httpClient.get( this.url + "/user/");
  }

  fetchSongDataOfPlaylist(url : String) : any{
    return this.httpClient.get(this.url + "/playlist/songs/" + url);
  } 

  fetchSongDataOfAlbum(url : String) : any{
    return this.httpClient.get(this.url + "/album/songs/" + url);
  } 

  fetchSongDataOfArtist(url : String) : any{
    return this.httpClient.get(this.url + "/artist/songs/" + url);
  } 

  follow(artistId : String,userId : String){
    console.log("follow api called");
    return this.httpClient.get(this.url + "/artist/follow/" + artistId + "/" + userId);
  }
  
  unfollow(artistId : String,userId : String){
    console.log("unfollow api called");
    return this.httpClient.get(this.url + "/artist/unfollow/" + artistId + "/" + userId);
  }

  register(user : any){
    return this.httpClient.post(this.url + "/user/",user);
  }

  login(email : String,password : String){
    return this.httpClient.get(this.url + "/user/login/" + email + "/" + password);
  }

  createPlaylist(name : String,songs :String){
    return this.httpClient.get(this.url + "/playlist/userCreate/" + name + "/" + songs + "/" + sessionStorage.getItem("userId"));
  }

  deletePlaylist(name : String){
    return this.httpClient.get(this.url + "/playlist/deletePlaylist/" + name);
  }

  searchSong(name : String){
    return this.httpClient.get(this.url + "/song/search/" + name);
  }

}
