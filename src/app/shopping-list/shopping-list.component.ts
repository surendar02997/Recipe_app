import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Incredient } from '../shared/ingredients.model';
import { ShoppinglistSevice } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  // ingredients:Incredient[]=[
  //   new Incredient('Tomato',25),
  //   new Incredient('Apple',65)
  // ];
  ingredients:Incredient[];
  private igsubscription:Subscription;
  constructor(private ShoppinglistSevice:ShoppinglistSevice) { }

  ngOnInit(): void {
    this.ingredients=this.ShoppinglistSevice.getingredients();

    this.igsubscription=this.ShoppinglistSevice.incredientchanged.subscribe(
      (ingredients:Incredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }
  ngOnDestroy():void
  {
    this.igsubscription.unsubscribe();
  }
//   onaddedingred(ingred:Incredient)
//   {
//    this.ingredients.push(ingred);
//  //   ShoppinglistSevice.getingredients();
//   }

onedititem(index:number){
  //alert("");
  this.ShoppinglistSevice.startedediting.next(index);
}
}
