import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {ContactService} from '../component/contact/contact.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule
  ],
  styleUrl:'app.component.scss',
})
export class AppComponent {
  title = 'eclessence';
}
