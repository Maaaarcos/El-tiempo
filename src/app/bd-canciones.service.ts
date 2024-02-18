import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdCancionesService {

  private url="https://my-json-server.typicode.com/antcanor/angular/"

  private songs=<any>[]
  private playlists=<any>[]
  constructor(private http:HttpClient) { 
    http.get(this.url+"songs").subscribe((JSON:any)=>{
      this.songs=JSON})
      http.get(this.url+"playlists").subscribe((JSON:any)=>{
        this.playlists=JSON})
  }


  getSongs(){
    return this.songs
  }

  getPlaylist(){
    return this.playlists
  }

  addSong(song:any){
    this.songs.push(song)
  }

  deleteSong(song:any){
    this.songs=this.songs.filter((s:any)=>s!=song)
  }

  addPlaylist(name:string){
    this.playlists.push({name:name,songs:[]})
  }

  deletePlaylist(playlist:any){
    this.playlists=this.playlists.filter((p:any)=>p!=playlist)
  }

  addSongToPlaylist(song:any,playlist:any){
    playlist.songs.push(song)
  }

  removeSongFromPlaylist(song:any,playlist:any){
    playlist.songs=playlist.songs.filter((s:any)=>s!=song)
  }

  getSongById(id:number){
    return this.songs.find((s:any)=>s.id==id)
  }

  getPlaylistById(id:number){
    return this.playlists.find((p:any)=>p.id==id)
  }

  getPlaylistSongs(playlist:any){
    return playlist.songs.map((id:number)=>this.getSongById(id))
  }

  getPlaylistSongsById(id:number){
    return this.getPlaylistSongs(this.getPlaylistById(id))
  }

  getSongByIds(ids:number[]){
    return ids.map((id:number)=>this.getSongById(id))
  }

  getPlaylistByIds(ids:number[]){
    return ids.map((id:number)=>this.getPlaylistById(id))
  }

  getPlaylistSongsByPlaylistIds(ids:number[]){
    return ids.map((id:number)=>this.getPlaylistSongsById(id))
  }
 
  getSongNameById(id:number){ 
    
  const song = this.getSongById(id); 
  
  return song ? song.name : null; }

}
