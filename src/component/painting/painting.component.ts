import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  styleUrls: ['./painting.component.scss']
})
export class PaintingComponent {
  title = 'Mes Techniques et inspirations';
  message = 'Cette section est en préparation. Découvrez bientôt les techniques que j\'utilise ' +
    'pour créer des œuvres de Fluid Art.';
}
