import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredientsIn: Ingredient[]) {

    for (const ingredient of ingredientsIn) {
      let i = this.ingredients.findIndex(x => x.name === ingredient.name);

      if (i !== -1) {
        this.ingredients[i].amount += ingredient.amount;
      } else {
        this.ingredients.push(ingredient);
      }
    }
  }


}
