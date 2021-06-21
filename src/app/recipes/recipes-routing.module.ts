import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Authguard } from "src/auth/auth.guard";
import { SharedModule } from "../shared/shared.module";

import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";


const appRoutes:Routes=[
   
    {path:'recipes',component:RecipesComponent,canActivate:[Authguard],children:[
        {path:'',component:RecipeStartComponent},
        {path:'new',component:RecipeEditComponent},
        {path:':id',component:RecipeDetailComponent},//,resolve:[reciperesolverservice]
      
        {path:':id/edit',component:RecipeEditComponent},//resolve:[reciperesolverservice]
        
    ]},
]
@NgModule({
    imports:[RouterModule.forChild(appRoutes)],
    exports:[RouterModule]
})
export class RecipesRoutingModule{

}