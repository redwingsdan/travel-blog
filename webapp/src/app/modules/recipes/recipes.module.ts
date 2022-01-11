import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeRoutes } from './recipes.routes';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../shared/core.module';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeComponent } from './recipe/recipe.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeCardComponent,
    RecipeComponent
  ],
  imports: [
    CoreModule,
    RouterModule.forChild(RecipeRoutes)
  ],
  providers: []
})
export class RecipesModule { }
