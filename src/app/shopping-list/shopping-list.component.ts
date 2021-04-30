import { Component, OnInit } from '@angular/core';
import { Incredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Incredient[]=[
    new Incredient('Tomato',25),
    new Incredient('Apple',65)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onaddedingred(ingred:Incredient)
  {
    this.ingredients.push(ingred);
  }
}
