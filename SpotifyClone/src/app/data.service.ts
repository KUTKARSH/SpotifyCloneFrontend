import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient){

  }

  fetchSongsData() : any{
      return this.httpClient.get( "http://localhost:8080/song/");
  }

  fetchPlaylistData(userId : String) : any{
    return this.httpClient.get( "http://localhost:8080/playlist/byUser/" + userId);
  }

  fetchAlbumData() : any{
    return this.httpClient.get( "http://localhost:8080/album/");
  }

  fetchFollowedArtistData(id : String) : any{
    return this.httpClient.get( "http://localhost:8080/artist/userFollowed/" + id);
  }

  fetchUnfollowedArtistData(id : String) : any{
    return this.httpClient.get( "http://localhost:8080/artist/userUnfollowed/" + id);
  }

  fetchUserData() : any{
    return this.httpClient.get( "http://localhost:8080/user/");
  }

  fetchSongDataOfPlaylist(url : String) : any{
    return this.httpClient.get("http://localhost:8080/playlist/songs/" + url);
  } 

  fetchSongDataOfAlbum(url : String) : any{
    return this.httpClient.get("http://localhost:8080/album/songs/" + url);
  } 

  fetchSongDataOfArtist(url : String) : any{
    return this.httpClient.get("http://localhost:8080/artist/songs/" + url);
  } 

  follow(artistId : String,userId : String){
    return this.httpClient.get("http://localhost:8080/artist/follow/" + artistId + "/" + userId);
  }
  
  unfollow(artistId : String,userId : String){
    return this.httpClient.get("http://localhost:8080/artist/unfollow/" + artistId + "/" + userId);
  }

  register(user : any){
    return this.httpClient.post("http://localhost:8080/user/",user);
  }

  login(email : String,password : String){
    return this.httpClient.get("http://localhost:8080/user/login/" + email + "/" + password);
  }

}
