import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  imports: [FormsModule, RouterModule],
  templateUrl: './crear-cuenta.html',
  styleUrl: './crear-cuenta.css'
})

export class CrearCuenta {

  nombre: string = '';
  edad: number | null = null;
  contrasena: string = '';
  correoFamiliar: string = '';

  crearCuenta() {
    console.log('Cuenta creada:', {
      nombre: this.nombre,
      edad: this.edad,
      contrasena: this.contrasena,
      correoFamiliar: this.correoFamiliar
    });

    alert('¡Cuenta creada con éxito!');
  }
}
