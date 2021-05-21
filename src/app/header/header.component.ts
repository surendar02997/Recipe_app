import { Component, Output,EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Authservice } from "src/auth/auth.service";
import { datastorageservice } from "../shared/data-storage.service";



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
   
})


export class HeaderComponent implements OnInit,OnDestroy{
    isAuthenticated=false;
    private userSub:Subscription
    constructor(private datastorageservice:datastorageservice,private authservice:Authservice){}

//    @Output() featureselected= new EventEmitter<string>();
//     onselect(feature:string)
//     {
//         this.featureselected.emit(feature);
 //   }

ngOnInit(){
this.userSub=this.authservice.user.subscribe(user=>{
    this.isAuthenticated=!!user;
});
}

onLogOut(){
    this.authservice.logout();
}

 onsavedata(){
    this.datastorageservice.storerecipes();
 }
 onfetchdata(){
     this.datastorageservice.getrecipes();
 }
 ngOnDestroy(){
    this.userSub.unsubscribe();
 }
}