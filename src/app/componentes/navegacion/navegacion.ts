import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Router, RouterModule } from '@angular/router';
import { AudioService } from '../../componentes/audio/audio';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navegacion.html',
  styleUrls: ['./navegacion.css'],
})
export class NavegacionComponent {
  constructor(private sharedService: SharedService, private router: Router, public audioService: AudioService) {}

  cambiarImagen() {
    this.sharedService.changeImage('assets/img/animate3.gif');
    setTimeout(() => {
      this.sharedService.changeImage('assets/img/animate2.gif');
    }, 4000);
  }

  irAMinijuego() {
    this.router.navigate(['/loading-minijuego']);
  }
} 
