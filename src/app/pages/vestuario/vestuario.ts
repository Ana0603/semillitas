import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../componentes/audio/audio';

@Component({
  selector: 'app-vestuario',
  imports: [RouterModule, CommonModule],
  templateUrl: './vestuario.html',
  styleUrl: './vestuario.css'
})

export class Vestuario {

  constructor(public audioService: AudioService) {}

  ropaActual = '00.png';
  ropaAnimada = false;

  ropaOpciones = [
    '01.png',
    '02.png',
    '03.png',
    '04.png',
    '05.png',
    '06.png' 
  ];

  cambiarRopa(nombreImagen: string) {
    this.ropaAnimada = false;
    this.ropaActual = nombreImagen;
    setTimeout(() => {
    this.ropaAnimada = true; 
  }, 10);
  }
}
