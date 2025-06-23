import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavegacionComponent, } from '../../componentes/navegacion/navegacion';
import { SharedService } from '../../services/shared.service';
import { Misiones } from '../../componentes/misiones/misiones';
import { AudioService } from '../../componentes/audio/audio';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavegacionComponent, Misiones, CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  encapsulation: ViewEncapsulation.None,
})
export class Inicio {
  
  characterImage: string = 'assets/img/animate2.gif';
  isDarkMode = false;
  mostrarMisiones = false;

  constructor(private sharedService: SharedService, public audioService: AudioService) { } 

  ngOnInit() {
    this.sharedService.currentImage.subscribe(image => {
      this.characterImage = image;
    });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  abrirMisiones() {
    this.mostrarMisiones = true;
    console.log('Abriendo misiones...');
  }
  cerrarMisiones() {
    this.mostrarMisiones = false;
  }
}
