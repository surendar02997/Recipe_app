import { NgModule } from "@angular/core";
import { RecipeService } from './recipes/recipes.service';
import { ShoppinglistSevice } from './shopping-list/shopping-list.service';
import { Authinterceptorservice } from 'src/auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    providers:[
        ShoppinglistSevice,
        RecipeService,
        {provide:HTTP_INTERCEPTORS,useClass:Authinterceptorservice,multi:true}
    ]
})
export class CoreModule{

}