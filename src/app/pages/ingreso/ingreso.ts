import { Component, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from '../../componentes/audio/audio';


@Component({
  selector: 'app-ingreso',
  imports: [],
  templateUrl: './ingreso.html',
  styleUrl: './ingreso.css',
  encapsulation: ViewEncapsulation.None,
})
export class Ingreso implements AfterViewInit {
  constructor(private elRef: ElementRef, private router: Router,public audioService: AudioService) {}

  ngAfterViewInit(): void {
  }

  irAInicio() {
    this.router.navigate(['/cargando']);
  }

  irAIntro() {
    this.router.navigate(['/intro']);
  }
} 