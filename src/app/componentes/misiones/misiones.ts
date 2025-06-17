import { Component, EventEmitter, Output  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-misiones',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './misiones.html',
  styleUrl: './misiones.css'
})

export class Misiones {
  @Output() cerrar = new EventEmitter<void>();

  cerrarMisiones() {
    this.cerrar.emit(); 
  }
}