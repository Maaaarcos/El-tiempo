import { Component, Input, inject } from '@angular/core';
import { CancionesComponent } from '../canciones/canciones.component';  
import { BdCancionesService } from '../bd-canciones.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CancionesComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
 
  

  private bd=inject(BdCancionesService)

  getSongs(){
    return this.bd.getSongs()
  }


}
