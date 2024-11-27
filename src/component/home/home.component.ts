import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app.component.html-home',
  templateUrl: './home.component.html',
  imports: [
    RouterLink,
    HeaderComponent
  ],
  standalone: true,
  styleUrl : 'home.component.scss'
})
export class HomeComponent {
}
