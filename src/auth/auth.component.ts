import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, observable, Subscription } from "rxjs";
import { Authinterfacedata, Authservice } from "./auth.service";

import { AlertComponent } from "src/app/shared/alert/alert.component";
import { PlaceholderDirective } from "src/app/shared/placeholder/placeholder.directive";

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent implements OnDestroy{
    constructor(private authservuce:Authservice,private router:Router,private componentFactoryResolver:ComponentFactoryResolver){}
isloginmode=true;
isspinner=false;
error:string;
private closeSubscription:Subscription;
@ViewChild(PlaceholderDirective,{static:false}) alertHost:PlaceholderDirective;

switchmode()
{
    this.isloginmode=!this.isloginmode;
}

submit(form:NgForm)
{
console.log(form.value);


if(!form.valid){
    return;
}
const email=form.value.email;
const pwd=form.value.password;
let authobs:Observable<Authinterfacedata>
if(this.isloginmode){
    authobs=this.authservuce.login(email,pwd);
}
else{
   
    authobs=this.authservuce.signup(email,pwd);
}

this.isspinner=true;
   

authobs.subscribe(data=>{
    this.isspinner=false;
    this.router.navigate(['/recipes']);
    console.log("data is",data);
    
},error=>{
    this.isspinner=false;
    this.error=error;
    this.ShowError(error);
    console.log("error is",error);
    
})
form.reset();


}
onhandleerror(){
    this.error=null;
}


ngOnDestroy(){
    if(this.closeSubscription){
        this.closeSubscription.unsubscribe();
    }
}

ShowError(message:string){

    const alertcompfactory= this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    const hostviewcontainerref=this.alertHost.viewcontainerRef;
    hostviewcontainerref.clear();

   const componentRef= hostviewcontainerref.createComponent(alertcompfactory);

   componentRef.instance.message=message;
   this.closeSubscription=componentRef.instance.close.subscribe( ()=>{
       this.closeSubscription.unsubscribe();
       hostviewcontainerref.clear();
   })

}

}