import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../shared/recipes/recipes.interface';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() {}

  ngOnInit() {
  }
}
