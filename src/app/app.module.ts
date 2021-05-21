import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementsComponent } from './server-elements/server-elements.component';
import { ShoppinglistSevice } from './shopping-list/shopping-list.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApproutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipes.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from 'src/auth/auth.component';
import { SpinnerLoaderComponent } from './shared/spinner-loader/spinner-loader.component';
import { Authinterceptorservice } from 'src/auth/auth-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponent,
    ServerElementsComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    SpinnerLoaderComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ApproutingModule,
    ReactiveFormsModule,
    HttpClientModule
  
  
  ],
  
  providers: [ShoppinglistSevice,RecipeService,{provide:HTTP_INTERCEPTORS,useClass:Authinterceptorservice,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
