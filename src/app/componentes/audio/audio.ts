import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio = new Audio();

  constructor() {
    this.audio.src = 'assets/img/musica.mp3';
    this.audio.loop = true;
    this.audio.volume = 0.4;
  }

  play() {
    this.audio.play().catch(err => console.log('Audio blocked by browser:', err));
  }

  pause() {
    this.audio.pause();
  }

  playButtonSound() {
  const clickAudio = new Audio('assets/img/btnsonido.mp3');
  clickAudio.volume = 0.5;
  clickAudio.play().catch(err => {
    console.warn('El navegador bloqueó el sonido del botón:', err);
  });
}
}
