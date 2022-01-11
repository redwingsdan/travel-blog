import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../shared/recipes/recipes.interface';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  constructor(
    private service: RecipesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.search();
  }

  search() {
    let form = {}
    this.service.getAllRecipes(form).subscribe(data => {
      this.recipes = data;
    });
  }

  goToRecipe(recipeId: number) {
    this.router.navigate([`/app/recipes/${recipeId}`], {relativeTo: this.route});
  }
}
