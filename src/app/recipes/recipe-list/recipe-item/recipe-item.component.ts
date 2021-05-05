import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
//import { RecipeService } from '../../recipes.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:Recipe;
  @Input() index:number;
//  @Output() recipeselected=new EventEmitter<void>();
 
 // constructor(private reciprservice:RecipeService) { }

  ngOnInit(): void {
  }
  // onselected()
  // {
   
  //   this.reciprservice.recipeselected.emit(this.recipe);

  // }
}
