
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "src/auth/auth.component";
import { RecipesRoutingModule } from "./recipes/recipes-routing.module";
//import { reciperesolverservice } from "./recipes/recipes-resolver.service";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";



const appRoutes:Routes=[
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
   // {path:'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'},
  //  {path:'shopping-list',loadChildren:'./shopping-list/ShoppingList.module#ShoppingListModule'},
   // {path:'auth',loadChildren:'./auth/auth.module#AuthModule'},
  //  {path:'recipes',loadChildren:()=>import('./recipes/recipes.module').then(m=>m.RecipesModule)}
   
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes),RecipesRoutingModule],
    exports:[RouterModule]
})
export class ApproutingModule{

  

}