import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    NgForOf
  ],
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images = [
    { url: 'assets/tableau1.jpg', title: 'Reflets célestes', category: 'moyen' },
    { url: 'assets/tableau2.jpg', title: 'Grains d’éternité', category: 'texture' },
    { url: 'assets/tableau3.jpg', title: 'Sous la surface', category: 'grand' },
    { url: 'assets/tableau4.jpg', title: 'Émergence chromatique', category: 'petit' },
    { url: 'assets/tableau5.jpg', title: 'Entre deux mondes', category: 'grand' },
    { url: 'assets/tableau6.jpg', title: 'Poussières d’étoiles', category: 'grand' }
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
