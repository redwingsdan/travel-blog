import { RecipesComponent } from './recipes.component';
import { Routes } from '@angular/router';
import { RecipeResolver } from '../../shared/recipes/recipe.resolver';
import { RecipeComponent } from './recipe/recipe.component';

export const RecipeRoutes: Routes = [
  {
    path: '',
    component: RecipesComponent
  },
  {
    path: ':recipeId',
    data: {
      title: 'Recipe'
    },
    resolve: {
      recipe: RecipeResolver,
    },
    component: RecipeComponent,
    children: []
  }
];
