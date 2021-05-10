import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Incredient } from '../shared/ingredients.model';
export class ShoppinglistSevice{
   
   private ingredients:Incredient[]=[
        new Incredient('Tomato',25),
        new Incredient('Apple',65)
      ];
      // incredientchanged=new EventEmitter<Incredient[]>();
  incredientchanged=new Subject<Incredient[]>();

  startedediting=new Subject<number>();
      getingredients()
      {
          return this.ingredients.slice();
      }
      addingredient(ingredient:Incredient)
      {
        this.ingredients.push(ingredient);

        // this.incredientchanged.emit(this.ingredients.slice());
        this.incredientchanged.next(this.ingredients.slice());
      }

      addingredients(ingredients:Incredient[])
      {
            this.ingredients.push(...ingredients);
            // this.incredientchanged.emit(this.ingredients.slice());
            this.incredientchanged.next(this.ingredients.slice());

      }

      getincridient(index:number)
      {
        return this.ingredients[index];
      }

      updateincrident(index:number,newincredient:Incredient)
      {
         this.ingredients[index]=newincredient;
        this.incredientchanged.next(this.ingredients.slice());
      }
      deleteingridient(index:number)
      {
        this.ingredients.splice(index,1);
        this.incredientchanged.next(this.ingredients.slice());
      }

     
}