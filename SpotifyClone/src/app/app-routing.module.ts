import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SongComponent} from './song/song.component';
import {AlbumComponent} from  './album/album.component';
import {ArtistComponent} from './artist/artist.component';
import {PlaylistComponent} from './playlist/playlist.component';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {RegisterComponent} from './register/register.component'; 

const routes: Routes = [
  { path: 'song', component: SongComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'user', component: UserComponent },
  {path : 'login' , component : LoginComponent},
  {path : 'logout' , component : LogoutComponent},
  {path : 'register' , component : RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
