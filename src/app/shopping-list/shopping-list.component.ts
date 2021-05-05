import { Component, OnInit } from '@angular/core';
import { Incredient } from '../shared/ingredients.model';
import { ShoppinglistSevice } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // ingredients:Incredient[]=[
  //   new Incredient('Tomato',25),
  //   new Incredient('Apple',65)
  // ];
  ingredients:Incredient[];
  constructor(private ShoppinglistSevice:ShoppinglistSevice) { }

  ngOnInit(): void {
    this.ingredients=this.ShoppinglistSevice.getingredients();

    this.ShoppinglistSevice.incredientchanged.subscribe(
      (ingredients:Incredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }
//   onaddedingred(ingred:Incredient)
//   {
//    this.ingredients.push(ingred);
//  //   ShoppinglistSevice.getingredients();
//   }
}
