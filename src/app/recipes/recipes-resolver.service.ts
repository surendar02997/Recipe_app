import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { datastorageservice } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";


// @Injectable({
//     providedIn:'root'
// })
// export class reciperesolverservice implements Resolve<Recipe>{

//     constructor(private datastorageservice:datastorageservice){}
//     resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
//         return this.datastorageservice.getrecipes();

//     }
// }