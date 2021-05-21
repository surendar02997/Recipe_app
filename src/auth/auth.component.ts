import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, observable } from "rxjs";
import { Authinterfacedata, Authservice } from "./auth.service";

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent{
    constructor(private authservuce:Authservice,private router:Router){}
isloginmode=true;
isspinner=false;
error:string;
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
    console.log("error is",error);
    
})
form.reset();


}

}