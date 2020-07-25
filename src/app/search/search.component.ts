import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {SongClass} from './song';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  songs : SongClass[];
  player : Boolean;

  constructor(private svc : DataService) { 
    // this.status = false;
    this.player = false;
    this.songs = [];
  }

  ngOnInit(): void {
  }

  search(){
    let searchText = (<HTMLInputElement>document.getElementById("searchText")).value;
    this.svc.searchSong(searchText)
    .subscribe(
        (d : SongClass) => {
            console.log(d);
            if(d != null)
            this.songs.push(d);
        }
    );
  }

  name : String;
   status :Boolean;
   play(name : String){
    this.status = true;
    // let fileName = (<HTMLInputElement>document.getElementById("fileName"));
    // fileName.setAttribute("src",String(this.svc.songMap.get(name)));
    this.svc.play(name);
   }

   pause(){
      this.status = false;
      this.svc.pause();
   }


}
