import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Authservice } from "./auth.service";
import { exhaustMap, map,take,tap } from "rxjs/operators";

@Injectable()

export class Authinterceptorservice implements HttpInterceptor{
    constructor(private Authservice:Authservice){}
    intercept(req:HttpRequest<any>,next:HttpHandler){
       return this.Authservice.user.pipe(take(1),exhaustMap(user=>{

        if(!user){
            return next.handle(req);
        }

        const modifiedreq=req.clone({
            params:new HttpParams().set('auth',user.token)
        });

            return next.handle(modifiedreq);
        }))
       
    }
}