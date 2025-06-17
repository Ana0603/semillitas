import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mini-juego',
  imports: [CommonModule, RouterModule ],
  standalone: true,
  templateUrl: './mini-juego.html',
  styleUrl: './mini-juego.css'
})

export class MiniJuego {

  capitulos = [
  { numero: '01', titulo: '', route: 'nivel1' },
  { numero: '02', titulo: '', route: 'nivel2' },
  { numero: '03', titulo: '', route: 'nivel3' },
  { numero: '04', titulo: '', route: 'nivel4' },
];

constructor() { }

ngOnInit() {
}

}