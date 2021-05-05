import { EventEmitter } from '@angular/core';
import { Incredient } from '../shared/ingredients.model';
export class ShoppinglistSevice{
   
   private ingredients:Incredient[]=[
        new Incredient('Tomato',25),
        new Incredient('Apple',65)
      ];

  incredientchanged=new EventEmitter<Incredient[]>();
      getingredients()
      {
          return this.ingredients.slice();
      }
      addingredient(ingredient:Incredient)
      {
        this.ingredients.push(ingredient);

        this.incredientchanged.emit(this.ingredients.slice());
      }

      addingredients(ingredients:Incredient[])
      {
            this.ingredients.push(...ingredients);
            this.incredientchanged.emit(this.ingredients.slice());

      }

     
}