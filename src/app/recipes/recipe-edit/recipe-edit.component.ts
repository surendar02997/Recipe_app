import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeform:FormGroup
  constructor(private route:ActivatedRoute ,private recipeservice:RecipeService,private router:Router) { }
id:number;
editmode=false;
  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editmode=params['id']!=null;

        console.log(this.editmode);

        this.initform();
        
      }
    )
  }

  private initform()
  {
    let recipename='';
    let imgpath='';
    let description='';
    let recipeincridients=new FormArray([]);

    if(this.editmode)
    {
      const recipe=this.recipeservice.getrecipes_byid(this.id);
      recipename=recipe.name;
      imgpath=recipe.imgpath;
      description=recipe.description;

      if(recipe['incredients'])
      {
        for(let incridient of recipe.incredients)
        {
          recipeincridients.push(new FormGroup({
            'name':new FormControl(incridient.name,Validators.required),
            'amount':new FormControl(incridient.amount,[
              Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          }))
        }
      }
    }

    this.recipeform=new FormGroup({
      'name':new FormControl(recipename,Validators.required),
      'imgpath':new FormControl(imgpath,Validators.required),
      'description':new FormControl(description,Validators.required),
      'incridents':recipeincridients
    })
  }
  onsubmit(){
   // alert();
   // console.log(this.recipeform);
   //const newrecipe=new Recipe[this.recipeform.value];
   if(this.editmode)
   {
    // const newrecipe1=new Recipe(
    //   this.recipeform.value['name'],
    //   this.recipeform.value['imgpath'],
    //   this.recipeform.value['description'],
    //   this.recipeform.value['incridents']
    
    // );
    // console.log("newrecipe1",newrecipe1);
    
     this.recipeservice.updaterecipes(this.id,this.recipeform.value);
   //  console.log(this.recipeservice.updaterecipes(this.id,this.recipeform.value));
     
   }
   else{
     this.recipeservice.addrecipes(this.recipeform.value);
   }
    this.oncancel();
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeform.get('incridents')).controls;
  }

  onaddincred()
    {
      (<FormArray>this.recipeform.get('incridents')).push(new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[
          Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      }))
    }

    oncancel(){
      this.router.navigate(['../'],{relativeTo:this.route});
    }

    ondelete_incred(index:number)
    {
      (<FormArray>this.recipeform.get('incridents')).removeAt(index);
    }
}
