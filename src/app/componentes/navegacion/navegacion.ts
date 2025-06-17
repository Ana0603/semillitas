import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.html',
  styleUrls: ['./navegacion.css']
})
export class NavegacionComponent {

  constructor(private sharedService: SharedService) {}

  cambiarImagen() {
    this.sharedService.changeImage('assets/img/animate3.gif');
    setTimeout(() => {
      this.sharedService.changeImage('assets/img/animate2.gif');
    }, 4000);
  }
}