import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Incredient } from '../shared/ingredients.model';
import { ShoppinglistSevice } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
    
    recipechanges=new Subject<Recipe[]>();

    private recipes:Recipe[]=[
        new Recipe('Idly',
        'Idly is the Best Breakfast',
        'https://t3.ftcdn.net/jpg/03/62/02/26/360_F_362022640_fZ6UM0JycJlFDdBiR1pYlNddKfdGvYwR.jpg',
        [new Incredient('Flaur',1),new Incredient('Onion',5)
    ]),
       
       
    new Recipe('Meals',
    'Meals is the traditional Lunch',
    'https://thalappakatti.com/wp-content/uploads/2019/09/thalappakatti-fish-meals-1.jpg',
    [new Incredient('Vegetables',1),new Incredient('salt',5)
]),
    ]

      //  private recipes:Recipe[]=[];

    constructor(private ShoppinglistSevice:ShoppinglistSevice){}
    
    // recipeselected=new EventEmitter<Recipe>();
    // recipeselected=new Subject<Recipe>();



    setrecipes(recipes:Recipe[])//from firebase database
    {
       this.recipes=recipes;
       this.recipechanges.next(this.recipes.slice());
    }

    getrecipes()
    {
       return this.recipes.slice();
    }

    getrecipes_byid(id:number)
    {
       return this.recipes[id];
    }

    addincredienttoshoppinglist(incredients:Incredient[])
    {
this.ShoppinglistSevice.addingredients(incredients);
    }

    addrecipes(recipe:Recipe)
    {
        this.recipes.push(recipe);
        this.recipechanges.next(this.recipes.slice());
    }
    updaterecipes(index:number,newrecipe:Recipe)
    {
        this.recipes[index]=newrecipe;
        this.recipechanges.next(this.recipes.slice());
    }
    deleterecipe(index:number)
    {
        this.recipes.splice(index,1);
        this.recipechanges.next(this.recipes.slice());
    }


}