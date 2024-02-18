import { Component,inject } from '@angular/core';
import { ListasComponent } from '../listas/listas.component';
import { BdCancionesService } from '../bd-canciones.service';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [ListasComponent],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent {

  private bd=inject(BdCancionesService);

  constructor() { }

  getPlaylist(){

    return this.bd.getPlaylist()
  }

  getSongs(){

    return this.bd.getSongs()
  }

  addSongToPlaylist(song:any,playlist:any){
    playlist.songs.push(song)
  }

  removeSongFromPlaylist(song:any,playlist:any){
    playlist.songs=playlist.songs.filter((s:any)=>s!=song)
  }

  deletePlaylist(playlist:any){
    this.bd.deletePlaylist(playlist)
  }

  addPlaylist(name:string){
    this.bd.addPlaylist(name)
  }

  getPlaylistById(id:number){
    return this.bd.getPlaylistById(id)
  }

  getSongById(id:number){
    return this.bd.getSongById(id)
  }

  addSong(song:any){
    this.bd.addSong(song)
  }

  deleteSong(song:any){
    this.bd.deleteSong(song)
  }

  getPlaylistSongs(playlist:any){
    return this.bd.getPlaylistSongs(playlist)
  }

  getPlaylistSongsById(id:number){
    return this.bd.getPlaylistSongsById(id)
  }

  getSongByIds(ids:number[]){
    return this.bd.getSongByIds(ids)
  }

  getPlaylistByIds(ids:number[]){
    return this.bd.getPlaylistByIds(ids)
  }

}
