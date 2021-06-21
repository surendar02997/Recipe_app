import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { FormsModule } from '@angular/forms';

import { ServerElementsComponent } from './server-elements/server-elements.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApproutingModule } from './app-routing.module';



import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from 'src/auth/auth.component';
import { SpinnerLoaderComponent } from './shared/spinner-loader/spinner-loader.component';

import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/ShoppingList.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from 'src/auth/auth.module';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
   

    ServerElementsComponent,
 


    
  ],
  imports: [
    BrowserModule,
   
    NgbModule,
    ApproutingModule,

    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule,
    AuthModule
  
  
  ],
  

  bootstrap: [AppComponent]
})
export class AppModule { }
