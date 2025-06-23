import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../componentes/audio/audio';

@Component({
  selector: 'app-colecciones',
  imports: [RouterModule, CommonModule],
  templateUrl: './colecciones.html',
  styleUrl: './colecciones.css'
})
export class Colecciones { 

  constructor(public audioService: AudioService) {}

  imagenes = [
    {
  src: 'assets/img/misiones5.png',
  titulo: 'Primer vuelo',
  descripcion: 'Accede al mini juego por primera vez.',
  fecha: '💰 100pts'
},
    {
      src: 'assets/img/mision1.png',
      titulo: 'Historias de luz',
      descripcion: 'Completa todas las historias del capitulo 1.',
      fecha: '💰 150pts'
    },
    {
      src: 'assets/img/misiones8.png',
      titulo: 'Bosque encantado',
      descripcion: 'Completa todas las historias del capitulo 2.',
      fecha: '💰 300pts'
    },
    {
      src: 'assets/img/misiones4.png',
      titulo: 'Bien alimentada',
      descripcion: 'Riega tu semilla 10 veces.',
      fecha: '💰 320pts'
    },
    {
      src: 'assets/img/misiones7.png',
      titulo: 'Nueva florecita',
      descripcion: 'Haz que tu semilla crezca como una florecita.',
      fecha: '💰 400pts'
    },
    {
      src: 'assets/img/mision2.png',
      titulo: 'Islas mágicas',
      descripcion: 'Completa todas las historias del capitulo 3.',
      fecha: '💰 480pts'
    },
    {
      src: 'assets/img/misiones6.png',
      titulo: 'Reparadores',
      descripcion: 'Completa todas las historias del capitulo 4.',
      fecha: '💰 700pts'
    }
  ];

  seleccionada = this.imagenes[0];

  seleccionarImagen(imagen: any) {
    this.seleccionada = imagen;
  }
}
