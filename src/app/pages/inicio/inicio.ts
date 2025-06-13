import { Component, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  encapsulation: ViewEncapsulation.None,
})
export class Inicio {
  
  characterImage: string = 'assets/img/animate2.gif';
  isDarkMode = false;

  constructor(private sharedService: SharedService) { } 

  ngOnInit() {
    this.sharedService.currentImage.subscribe(image => {
      this.characterImage = image;
    });
  }

  toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;

  if (this.isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}
}
