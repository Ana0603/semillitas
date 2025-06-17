import { Routes } from '@angular/router';

import {Ingreso} from './pages/ingreso/ingreso';
import {Inicio} from './pages/inicio/inicio';
import {MiniJuego} from './pages/mini-juego/mini-juego';
import {Vestuario} from './pages/vestuario/vestuario';
import {Colecciones} from './pages/colecciones/colecciones';
import { LoadingIngreso } from './loading/loading-ingreso/loading-ingreso';
import { LoadingMinijuego } from './loading/minijuego/minijuego';

export const routes: Routes = [
    { path: '', component: Ingreso },
    { path: 'cargando', component: LoadingIngreso },
    { path: 'inicio', component: Inicio },
    { path: 'mini-juego', component: MiniJuego },
    { path: 'loading-minijuego', component: LoadingMinijuego },
    { path: 'vestuario', component: Vestuario },
    { path: 'colecciones', component: Colecciones },
];
