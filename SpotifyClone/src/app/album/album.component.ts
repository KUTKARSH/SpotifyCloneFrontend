import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  data : Array<any>;
  constructor(private svc : DataService) {
      svc.fetchAlbumData()
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
