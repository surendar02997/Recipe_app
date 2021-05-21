import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take, tap } from "rxjs/operators";
import { Authservice } from "./auth.service";

@Injectable({providedIn:'root'})
export class Authguard implements CanActivate{

    constructor(private authservice:Authservice,private router:Router){}

    canActivate(route:ActivatedRouteSnapshot,router:RouterStateSnapshot):boolean | Promise<boolean |  UrlTree> | Observable<boolean |UrlTree> | UrlTree{
        return this.authservice.user.pipe(take(1),map(user=>{
           const IsAuth=  !!user;

           if(IsAuth){
               return true
           }
           return this.router.createUrlTree(['/auth']);
        }))
    }
}