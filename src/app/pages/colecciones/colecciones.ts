import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colecciones',
  imports: [RouterModule, CommonModule],
  templateUrl: './colecciones.html',
  styleUrl: './colecciones.css'
})
export class Colecciones {
  imagenes = [
    {
      src: 'assets/img/mision1.png',
      titulo: 'Completa el capitulo 1',
      descripcion: 'Completa todo el capitulo 1 para que tu semilla crezca.',
      fecha: '2022-10-11'
    },
    {
      src: 'assets/img/mision2.png',
      titulo: 'Criatura del pantano',
      descripcion: 'Una rara especie en su hábitat natural.',
      fecha: '2022-10-12'
    },
    {
      src: 'assets/img/misiones4.png',
      titulo: 'Bosque encantado',
      descripcion: 'Paisaje con flora exótica y niebla mágica.',
      fecha: '2022-10-13'
    },
    {
      src: 'assets/img/misiones5.png',
      titulo: 'Templo del Fuego',
      descripcion: 'Ruinas de un templo ancestral bajo erupción.',
      fecha: '2022-10-14'
    },
    {
      src: 'assets/img/misiones6.png',
      titulo: 'Encuentro con el jefe',
      descripcion: 'Momento previo a una gran batalla.',
      fecha: '2022-10-15'
    }
  ];

  seleccionada = this.imagenes[0];

  seleccionarImagen(imagen: any) {
    this.seleccionada = imagen;
  }
}
