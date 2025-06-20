import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargando',
  imports: [],
  templateUrl: './loading-ingreso.html',
  styleUrl: './loading-ingreso.css'
})
export class LoadingIngreso {

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/inicio']);
    }, 1500);   
  }
} 