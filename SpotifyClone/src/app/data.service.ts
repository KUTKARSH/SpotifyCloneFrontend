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

  fetchPlaylistData() : any{
    return this.httpClient.get( "http://localhost:8080/playlist/");
  }

  fetchAlbumData() : any{
    return this.httpClient.get( "http://localhost:8080/album/");
  }

  fetchArtistData() : any{
    return this.httpClient.get( "http://localhost:8080/artist/");
  }

  fetchUserData() : any{
    return this.httpClient.get( "http://localhost:8080/user/");
  }

}
