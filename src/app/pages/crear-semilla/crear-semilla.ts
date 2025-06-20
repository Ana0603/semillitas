import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AudioService } from '../../componentes/audio/audio';

@Component({
  selector: 'app-crear-semilla',
  imports: [RouterModule, CommonModule,],
  templateUrl: './crear-semilla.html',
  styleUrls: ['./crear-semilla.css']
})
export class CrearSemilla {

  constructor(public audioService: AudioService) {}

  currentSlide = 0;

  slides = [
    {
      title: 'Flor de Bogotá',
      description: 'Inspirada en la flor representativa de la ciudad, esta semilla es una niña alegre y chispeante. Su risa vuela con el viento y su poder es controlar las corrientes de aire para limpiar, jugar y volar alto. ¡Nada la detiene cuando hay brisa en el corazón!',
      imageUrl: 'assets/img/personaje5.png'
    },
    {
      title: 'Cactus del desierto',
      description: 'Representante de la árida belleza de la Tatacoa, este cactus es muy sabio, tranquilo y siempre tiene un chiste seco bajo el brazo. Su poder es sacar espinas mágicas para proteger a sus amigos. Piensa antes de actuar… ¡y siempre encuentra la mejor solución!',
      imageUrl: 'assets/img/personaje3.png'
    },
    {
      title: 'Orquídea',
      description: 'Colorida y delicada, Orquídea es una de las flores más queridas de Colombia. Es muy creativa, cariñosa y tiene un lazo especial con los animales. Su poder: puede controlar la luz solar para iluminar, calentar o hacer brillar la esperanza.',
      imageUrl: 'assets/img/personaje1.png'
    },
    {
      title: 'Palma de cera del Quindío',
      description: 'Alta, fuerte y siempre sonriente, esta semilla del Quindío es la más extrovertida del grupo. Le encanta animar a los demás y nunca se rinde. Su superpoder es la fuerza increíble: ¡puede levantar rocas, árboles o el ánimo de todos!',
      imageUrl: 'assets/img/personaje2.png'
    },
    {
      title: 'Flor de mayo',
      description: 'La más dulce y suave de todas. Le fascinan los insectos, las flores pequeñas y cantar con la brisa. Su voz es mágica: cuando entona una melodía, puede calmar tormentas… o hacer dormir hasta al más inquieto saltamontes.',
      imageUrl: 'assets/img/personaje4.png'
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
} 
