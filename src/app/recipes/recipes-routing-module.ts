import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes.component';
import {AuthGuard} from '../auth/auth.guard';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipesResolverService} from './recipes-resolver.service';
import {NoRecipeComponent} from './no-recipe/no-recipe.component';

const routes: Routes = [{
    path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard], children: [
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
    {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]},
    {path: '', component: NoRecipeComponent},
    {path: '**', redirectTo: '/recipes'}
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
}
