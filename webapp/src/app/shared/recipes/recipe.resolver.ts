import { Injectable, Optional } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { RecipesService } from '../../modules/recipes/recipes.service';
import { Recipe } from './recipes.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolver implements Resolve<Recipe> {
  constructor(@Optional() private service: RecipesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service.getRecipeById(route.params.recipeId);
  }
}
