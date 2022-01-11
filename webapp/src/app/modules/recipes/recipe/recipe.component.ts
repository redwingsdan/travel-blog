import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../../shared/recipes/recipes.interface';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;
  isEditing: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RecipesService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.recipe = data.recipe;
    });
  }

  back() {
    this.router.navigate([`/app/recipes`], {relativeTo: this.route});
  }

  edit() {
    this.isEditing = true;
  }

  save() {
    this.service.saveRecipe(this.recipe).subscribe(savedRecipe => {
        this.isEditing = false;
    });
  }
}
