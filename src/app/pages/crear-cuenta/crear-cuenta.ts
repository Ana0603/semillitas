import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AudioService } from '../../componentes/audio/audio';

@Component({
  selector: 'app-crear-cuenta',
  imports: [FormsModule],
  templateUrl: './crear-cuenta.html',
  styleUrl: './crear-cuenta.css'
})

export class CrearCuenta {

  nombre: string = '';
  edad: number | null = null;
  contrasena: string = '';
  correoFamiliar: string = '';

    constructor(private router: Router, public audioService: AudioService) {}

  crearCuenta() {
    console.log('Cuenta creada:', {
      nombre: this.nombre,
      edad: this.edad,
      contrasena: this.contrasena,
      correoFamiliar: this.correoFamiliar
    });

    console.log('Cuenta creada:', this.nombre, this.edad);

    this.router.navigate(['/crear-semilla']); 
  }
} 
