import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit, OnChanges {

  recipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.recipe);
  }
}
