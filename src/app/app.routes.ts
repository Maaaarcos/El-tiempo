import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PlaylistComponent } from './playlist/playlist.component';

export const routes: Routes = [

    {
        path: '',
        component: InicioComponent ,
        title: 'Home page',
      },
      {
        path: 'playlist',
        component: PlaylistComponent,
        title: 'Buscador',
      },
      
];
