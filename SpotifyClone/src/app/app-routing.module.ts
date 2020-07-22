import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SongComponent} from './song/song.component';
import {AlbumComponent} from  './album/album.component';
import {ArtistComponent} from './artist/artist.component';
import {PlaylistComponent} from './playlist/playlist.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path: 'song', component: SongComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
