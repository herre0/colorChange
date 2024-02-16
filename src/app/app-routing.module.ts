import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BooklistComponent } from './booklist/booklist.component';
import { ColorChangeComponent } from './color-change/color-change.component';


const routes: Routes = [
  { path: "courses", component: CoursesComponent },
  { path: "authors", component: AuthorsComponent },
  { path: "color", component: ColorChangeComponent },
  { path: "pokemon", component: PokemonComponent },
  { path: "booklist", component: BooklistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
