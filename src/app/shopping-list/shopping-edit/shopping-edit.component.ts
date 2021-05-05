import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Incredient } from '../../shared/ingredients.model';
import { ShoppinglistSevice } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameinput',{static:true}) nameinputref:ElementRef;
  @ViewChild('amountinput',{static:true}) amountinputref:ElementRef;
 //@Output() ingredientadded=new EventEmitter<Incredient>();
  constructor(private ShoppinglistSevice:ShoppinglistSevice) { }

  ngOnInit(): void {
  }

  additem()
  {
    const ingname=this.nameinputref.nativeElement.value;
    const ingamount=this.amountinputref.nativeElement.value;
    const Ingredients=new Incredient(ingname,ingamount);

    this.ShoppinglistSevice.addingredient(Ingredients);

  //  this.ingredientadded.emit(Ingredients);
  }

}
