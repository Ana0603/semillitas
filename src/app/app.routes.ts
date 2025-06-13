import { Routes } from '@angular/router';

import {Ingreso} from './pages/ingreso/ingreso';
import {Inicio} from './pages/inicio/inicio';
import {MiniJuego} from './pages/mini-juego/mini-juego';
import {Vestuario} from './pages/vestuario/vestuario';
import {Colecciones} from './pages/colecciones/colecciones';
import { LoadingIngreso } from './loading/loading-ingreso/loading-ingreso';

export const routes: Routes = [
    { path: '', component: Ingreso },
    { path: 'cargando', component: LoadingIngreso },
    { path: 'inicio', component: Inicio },
    { path: '', component: MiniJuego },
    { path: '', component: Vestuario },
    { path: '', component: Colecciones },
];
