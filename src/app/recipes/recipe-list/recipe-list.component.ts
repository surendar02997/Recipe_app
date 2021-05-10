import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

 //@Output() recipewasselected=new EventEmitter<Recipe>();
  recipes:Recipe[];
 
  constructor(private reciprservice:RecipeService,private router:Router,private routes:ActivatedRoute) {  }

  ngOnInit(): void {
   

    this.reciprservice.recipechanges.subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes;
      }
    );

    this.recipes=this.reciprservice.getrecipes();
  }

  // onrecipeselected(recipe:Recipe)
  // {
  //   this.recipewasselected.emit(recipe);
  // }

  onnewrecipe(){
this.router.navigate(['new'],{relativeTo:this.routes});
  }

}
