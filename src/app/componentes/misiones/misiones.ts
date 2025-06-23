import { Component, EventEmitter, Output  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../componentes/audio/audio';

@Component({
  selector: 'app-misiones',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './misiones.html',
  styleUrl: './misiones.css'
})
 
export class Misiones {

  constructor(public audioService: AudioService) {}

  @Output() cerrar = new EventEmitter<void>();

  cerrarMisiones() {
    this.cerrar.emit(); 
  }
}