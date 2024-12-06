import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent
  ],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title = 'À propos du Fluid Art';
  description = 'Le Fluid Art est une forme d\'art moderne qui utilise la fluidité des peintures pour créer des œuvres dynamiques et colorées. Chaque tableau est unique, une véritable expression de créativité et d\'émotion.';
  additionalInfo = 'Sur ce site, je partagerai des techniques, des inspirations et des créations originales. Découvrez l\'univers fascinant du fluid art et laissez-vous inspirer par la beauté des couleurs en mouvement.';
  thankYouTitle = 'Remerciements';
  thankYouText = 'Nous tenons à remercier chaleureusement l\'entreprise SERLI pour l\'hébergement de mon site.';

  // URL vers le site de SERLI
  serliWebsite = 'https://www.serli.com';
}
