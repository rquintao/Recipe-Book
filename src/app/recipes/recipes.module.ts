import {NgModule} from '@angular/core';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipesComponent} from './recipes.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {NoRecipeComponent} from './no-recipe/no-recipe.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecipesRoutingModule} from './recipes-routing-module';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipesComponent,
    RecipeDetailComponent,
    NoRecipeComponent,
    RecipeEditComponent,
    RecipeItemComponent
  ],
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule, RecipesRoutingModule]
})
export class RecipesModule {}
