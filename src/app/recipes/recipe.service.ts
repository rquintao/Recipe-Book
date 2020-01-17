import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shopService: ShoppingListService) {
  }

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/08/meatball-black-bean-chilli.jpg?itok=n1KA3vhT',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]),
    new Recipe('Another test Recipe',
      'This is simply a new test',
      'https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg',
      [new Ingredient('Cebolas', 1), new Ingredient('Cenas', 2)])
  ];

  recipeSelectedEvent(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  getRecipes() {

    return this.recipes.slice();
  }

  sendIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shopService.addIngredients(ingredients);
  }

}
