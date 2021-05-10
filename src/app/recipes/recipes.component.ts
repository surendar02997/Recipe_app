import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
 // providers:[RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedrecipe:Recipe;
 // constructor(private reciprservice:RecipeService) { }

  ngOnInit(): void {
    // this.reciprservice.recipeselected.subscribe(
    //   (recipe:Recipe)=>{
    //     this.selectedrecipe=recipe;
    //   }
    // );
  }

}
