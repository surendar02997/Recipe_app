import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipes.service";
import { exhaustMap, map,take,tap } from "rxjs/operators";
import { Authservice } from "src/auth/auth.service";


@Injectable(
    {providedIn:'root'}
)
export class datastorageservice{
constructor(private http:HttpClient,private RecipeService:RecipeService,private authservice:Authservice){}

storerecipes()
{

   const recipes=this.RecipeService.getrecipes();
   this.http.put("https://recipeapp-f2844-default-rtdb.firebaseio.com/recipes.json",recipes).subscribe(response=>{
       console.log(response);
       
   });
}

getrecipes()
{

   
       return this.http.get<Recipe[]>("https://recipeapp-f2844-default-rtdb.firebaseio.com/recipes.json",
       {
           
       })
       .pipe(
    map(recipes=>{
        return recipes.map(recipe=>{
            return{
                ...recipe,
                incredients:recipe.incredients ?recipe.incredients : []
            }
        })
    }),tap(
        recipe=>{
this.RecipeService.setrecipes(recipe);
        }
    ));


   
    
    
    // .pipe(
    // ).subscribe(response=>{
    //     console.log("fetched recipes",response);
    //     this.RecipeService.setrecipes(response)
        
    // })
}

}