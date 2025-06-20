import { Routes } from '@angular/router';

import {Ingreso} from './pages/ingreso/ingreso';
import {Inicio} from './pages/inicio/inicio';
import {Vestuario} from './pages/vestuario/vestuario';
import {Colecciones} from './pages/colecciones/colecciones';
import { LoadingIngreso } from './loading/loading-ingreso/loading-ingreso';
import { LoadingMinijuego } from './loading/minijuego/minijuego';
import { Intro } from './loading/intro/intro';
import { CrearCuenta } from './pages/crear-cuenta/crear-cuenta';
import { CrearSemilla } from './pages/crear-semilla/crear-semilla';


export const routes: Routes = [
    { path: '', component: Ingreso },
    { path: 'cargando', component: LoadingIngreso },
    { path: 'inicio', component: Inicio },
    { path: 'intro', component: Intro },
    { path: 'crear-cuenta', component: CrearCuenta },
    { path: 'crear-semilla', component: CrearSemilla },
    { 
        path: 'mini-juego', 
        loadChildren: () => import('./pages/mini-juego/mini-juego.routes').then(m => m.routes) 
    },
    { path: 'loading-minijuego', component: LoadingMinijuego },
    { path: 'vestuario', component: Vestuario },
    { path: 'colecciones', component: Colecciones },
];
