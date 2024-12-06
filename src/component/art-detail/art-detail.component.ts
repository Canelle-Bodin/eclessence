import {ActivatedRoute, RouterLink} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    NgIf
  ],
  styleUrls: ['./art-detail.component.scss']
})
export class ArtDetailComponent implements OnInit {
  image: any;
  modalOpen = false;

  images = [
    { id: 1,
      url: 'assets/tableau1.jpg',
      title: 'Bleu Éternel',
      category: 'moyen',
      description: 'Une œuvre apaisante aux tons bleus.',
      dimensions: '50 x 40 cm',
      creationDate: 'Novembre 2024',
      technique: "Acrylique sur toile."
    },
    { id: 2,
      url: 'assets/tableau2.jpg',
      title: 'Grains d’éternité',
      category: 'texture',
      description: 'Texture riche inspirée des mystères de l’univers.',
      dimensions: '50 x 40 cm',
      creationDate: 'Novembre 2024',
      technique: "Acrylique sur toile."
    },
    { id: 3,
      url: 'assets/tableau3.jpg',
      title: 'Sous la surface',
      category: 'grand',
      description: 'Exploration des profondeurs de la réalité.',
      dimensions: '61 x 50 cm',
      creationDate: 'Juillet 2022',
      technique: "Acrylique sur toile."
    },
    { id: 4,
      url: 'assets/tableau4.jpg',
      title: 'Émergence chromatique',
      category: 'petit',
      description: 'Les couleurs qui naissent dans l’obscurité.',
      dimensions: '40 x 40 cm',
      creationDate: 'Décembre 2020',
      technique: "Peinture à l'eau sur toile."
    },
    { id: 5,
      url: 'assets/tableau5.jpg',
      title: 'Entre deux mondes',
      category: 'grand',
      description: 'Un voyage entre l’espace et le temps.',
      dimensions: '61 x 50 cm',
      creationDate: 'Février 2021',
      technique: "Acrylique sur toile."
    },
    { id: 6,
      url: 'assets/tableau6.jpg',
      title: 'Poussières d’étoiles',
      category: 'grand',
      description: 'Les particules d’étoiles dans un souffle cosmique.',
      dimensions: '61 x 50 cm',
      creationDate: 'Août 2022',
      technique: 'Acrylique sur toile'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadArtDetails(id);
  }

  loadArtDetails(id: string | null) {
    if (id) {
      const numericId = Number(id);
      this.image = this.images.find(img => img.id === numericId);
    }
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
