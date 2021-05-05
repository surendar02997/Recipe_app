import { EventEmitter, Injectable } from '@angular/core';
import { Incredient } from '../shared/ingredients.model';
import { ShoppinglistSevice } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
    

    private recipes:Recipe[]=[
        new Recipe('Food',
        'this is tasty food',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563',
        [new Incredient('Meat',1),new Incredient('Oil',5)
    ]),
       
       
    new Recipe('Water',
    'this is tasty Water',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563',
    [new Incredient('Water',1),new Incredient('Pan',5)
]),
    ]

    constructor(private ShoppinglistSevice:ShoppinglistSevice){}
    
    recipeselected=new EventEmitter<Recipe>();
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


}