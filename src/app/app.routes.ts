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
import { LoadingJuego1 } from './loading/juego1/juego1';
import { MiniJuego } from './pages/mini-juego/mini-juego';
import { Juego1 } from './pages/mini-juego/juego/juego1';


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
    { path: 'mini-juego', component: MiniJuego },
    { path: 'loading/juego1', component: LoadingJuego1 },
    { path: 'juego/juego1', component: Juego1 },
    { path: 'vestuario', component: Vestuario },
    { path: 'colecciones', component: Colecciones },
];
