import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

 // @Input() recipe:Recipe;
 recipe:Recipe;
 id:number;
  constructor(private recipeservice:RecipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id=+params['id'];
        this.recipe=this.recipeservice.getrecipes_byid(this.id);
      }
    );
  }
  onaddtoshoppinglist(){
    alert();
    this.recipeservice.addincredienttoshoppinglist(this.recipe.incredients);
  }

  Onedit(){
this.router.navigate(['edit'],{relativeTo:this.route});
  }
}
