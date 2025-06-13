import { Routes } from '@angular/router';

import {Ingreso} from './pages/ingreso/ingreso';
import {Inicio} from './pages/inicio/inicio';
import {MiniJuego} from './pages/mini-juego/mini-juego';
import {Vestuario} from './pages/vestuario/vestuario';
import {Colecciones} from './pages/colecciones/colecciones';

export const routes: Routes = [
    { path: '', component: Ingreso },
    { path: '', component: Inicio },
    { path: '', component: MiniJuego },
    { path: '', component: Vestuario },
    { path: '', component: Colecciones },
];
