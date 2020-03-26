import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {RecipeService} from './recipes/recipe.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataStorageService} from './shared/data-storage.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './auth/auth.component';
import {LoadingSpinnerComponent} from './shared/loading-spinner/loading-spinner.component';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {AlertComponent} from './shared/alert/alert.component';
import {RecipesModule} from './recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipesModule,
  ],
  providers: [RecipeService,
    ShoppingListService,
    DataStorageService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
