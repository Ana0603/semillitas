import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nivel1',
  templateUrl: './nivel1.html',
  styleUrls: ['./nivel1.css'],
  standalone: true,
  imports: [RouterModule],
})

export class Nivel1 {

  constructor(private router: Router) {}

  irAJuego1() {
    this.router.navigate(['/loading/juego1']);
  }

  ngOnInit() {}
}