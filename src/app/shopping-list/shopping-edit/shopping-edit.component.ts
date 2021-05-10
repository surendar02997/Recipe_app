import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild,OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { textChangeRangeIsUnchanged } from 'typescript';
import { Incredient } from '../../shared/ingredients.model';
import { ShoppinglistSevice } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @ViewChild('nameinput',{static:true}) nameinputref:ElementRef;
  // @ViewChild('amountinput',{static:true}) amountinputref:ElementRef;
 //@Output() ingredientadded=new EventEmitter<Incredient>();
 @ViewChild('f',{static:true}) slform:NgForm;
  constructor(private ShoppinglistSevice:ShoppinglistSevice) { }
  subscription:Subscription;
  editmode=false;
  editeditemindex:number;
  editeditem:Incredient;
  ngOnInit(): void {
   this.subscription= this.ShoppinglistSevice.startedediting.subscribe(
     (index:number)=>{
       this.editeditemindex=index;
       this.editmode=true;
        this.editeditem=this.ShoppinglistSevice.getincridient(index);

       this.slform.setValue(
         {
           name:this.editeditem.name,
           amount:this.editeditem.amount
         }
       )

   
       
     }
   );
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

  additem(form:NgForm)
  {
    // const ingname=this.nameinputref.nativeElement.value;
    // const ingamount=this.amountinputref.nativeElement.value;
    //const Ingredients=new Incredient(ingname,ingamount);

    //this.ShoppinglistSevice.addingredient(Ingredients);

  //  this.ingredientadded.emit(Ingredients);

  const value=form.value;
  const newincredient=new Incredient(value.name,value.amount);
  //console.log(Ingredients);
  
      if(this.editmode)
      {
       // alert('edit');
        this.ShoppinglistSevice.updateincrident(this.editeditemindex,newincredient);
        //console.log( this.ShoppinglistSevice.updateincrident(this.editeditemindex,newincredient));

      
        
      }
      else{
        this.ShoppinglistSevice.addingredient(newincredient);
      }

      this.editmode=false;
      this.slform.reset();
   
  }
  onclear(){
   
    this.editmode=false;
    this.slform.reset();
   
  }

  ondelete()
  {
    this.ShoppinglistSevice.deleteingridient(this.editeditemindex);
    this.onclear();
  }

}
