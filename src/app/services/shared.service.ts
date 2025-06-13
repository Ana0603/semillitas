import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private imageSource = new BehaviorSubject<string>('assets/img/animate2.gif');
  currentImage = this.imageSource.asObservable();

  changeImage(image: string) {
    this.imageSource.next(image);
  }
}
