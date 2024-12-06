import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';
import { GalleryComponent } from '../component/gallery/gallery.component';
import { ContactComponent } from '../component/contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import {ArtDetailComponent} from '../component/art-detail/art-detail.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'art/:id', component: ArtDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HttpClientModule]
})
export class AppRoutingModule {}
