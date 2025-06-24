import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-juego1',
  imports: [RouterModule],
  templateUrl: './juego1.html',
  styleUrl: './juego1.css'
})
export class Juego1 {
  constructor(private router: Router) {}
}
  