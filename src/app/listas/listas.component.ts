import { Component, Input, inject } from '@angular/core';
import { BdCancionesService } from '../bd-canciones.service';

@Component({
  selector: 'app-listas',
  standalone: true,
  imports: [],
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.css'
})
export class ListasComponent {

  @Input() playlist:any

  private bd = inject(BdCancionesService)

  constructor() { }

  getSongByIds(ids:number[]){
    return this.bd.getSongByIds(ids)
  }
  
  getSongNameById(id:number)
  {
    return this.bd.getSongNameById(id)
  }

  getSongById(id:number){
    return this.bd.getSongById(id)
  }
  
}
