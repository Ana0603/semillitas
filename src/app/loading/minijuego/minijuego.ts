import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minijuego',
  imports: [],
  templateUrl: './minijuego.html',
  styleUrl: './minijuego.css'
})

export class LoadingMinijuego {

  constructor(private router: Router) {}

  ngOnInit(): void {
  setTimeout(() => {
    this.router.navigate(['/mini-juego']);
  }, 4000);  
}
}
