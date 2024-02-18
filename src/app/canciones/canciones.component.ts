import { Component,Input} from '@angular/core';
import { BdCancionesService } from '../bd-canciones.service';

@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css'
})
export class CancionesComponent {

  @Input() canciones:any

  constructor() { } 

  
}
