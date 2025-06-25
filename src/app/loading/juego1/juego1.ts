import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego1',
  imports: [],
  templateUrl: './juego1.html',
  styleUrl: './juego1.css'
})

export class  LoadingJuego1 {
   constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['juego/juego1']);
    }, 51000);   
  }
} 
 