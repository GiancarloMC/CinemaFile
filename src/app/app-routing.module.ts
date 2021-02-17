import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesSectionComponent } from './components/movies-section/movies-section.component';

const routes: Routes = [
  { path: '', component: MoviesSectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
