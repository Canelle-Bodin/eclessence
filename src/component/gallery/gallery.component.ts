import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images = [
    { id: 1, url: 'assets/tableau1.jpg', title: 'Bleu Éternel', category: 'moyen' },
    { id: 2,url: 'assets/tableau2.jpg', title: 'Grains d’éternité', category: 'moyen' },
    { id: 3,url: 'assets/tableau3.jpg', title: 'Sous la surface', category: 'grand' },
    { id: 4,url: 'assets/tableau4.jpg', title: 'Émergence chromatique', category: 'petit' },
    { id: 5,url: 'assets/tableau5.jpg', title: 'Entre deux mondes', category: 'grand' },
    { id: 6,url: 'assets/tableau6.jpg', title: 'Poussières d’étoiles', category: 'grand' },
    { id: 7,url: 'assets/tableau7.2.jpg', title: 'Lumière Émergente', category: 'petit' },
    { id: 8,url: 'assets/tableau8.2.jpg', title: 'Flammes Aquatiques', category: 'petit' },
    { id: 9,url: 'assets/tableau9.2.jpg', title: 'Ondes Pacifiques', category: 'petit' }
  ];

  originalImages = this.images;
  filterGallery(category: string) {
    if (category === 'all') {
      this.images = [...this.originalImages];
    } else {
      this.images = this.originalImages.filter(image => image.category === category);
    }
  }

}
