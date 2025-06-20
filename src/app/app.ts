import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { AudioService } from './componentes/audio/audio';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'app-semillita';

  constructor(private router: Router, private audioService: AudioService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;
        if (url.includes('/intro')) {
          this.audioService.pause();
        } else {
          this.audioService.play();
        }
      });
       const initialUrl = this.router.url;
    if (!initialUrl.includes('/loading/intro')) {
      this.audioService.play();
    }
  }
}
