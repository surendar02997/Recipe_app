import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";


export interface Authinterfacedata{
    idToken:string;
    email:string;
    refreshToken:string;
    expiresIn:string;
    localId:string;
    registered?:boolean
}

@Injectable({providedIn:'root'})




export class Authservice{
    user=new BehaviorSubject<User>(null);
    private tokenExpirationTimer:any;
    constructor(private http:HttpClient,private router:Router){  }
   
    signup(email:string,password:string){
      return  this.http.post<Authinterfacedata>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRq_UvbpfIwP1SaaHmn3cC3iAdHLkhf3s",{
            email:email,
            password:password,
            returnSecureToken:true
        }).pipe(catchError(this.ErrorHandler),tap
        (resdata=>{
           this.authenticationtoken(resdata.email,
            resdata.localId,
            resdata.idToken,
            +resdata.expiresIn)
           
        })
        )
    }

    login(email:string,password:string){
        return this.http.post<Authinterfacedata>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDRq_UvbpfIwP1SaaHmn3cC3iAdHLkhf3s",{
            email:email,
            password:password,
            returnSecureToken:true
        }).pipe(catchError(this.ErrorHandler),tap
        (resdata=>{
           this.authenticationtoken(resdata.email,
            resdata.localId,
            resdata.idToken,
            +resdata.expiresIn)
           
        }));

     
    }

    AutoLogin(){
       const userdata:{
           email:string,
           id:string,
           _token:string,
           _TokenExpirationDate:string
       }= JSON.parse(localStorage.getItem('userdata'));
       if(!userdata)
       {
           return;
       }

       const loadeduser=new User(userdata.email,userdata.id,userdata._token,new Date(userdata._TokenExpirationDate));
       if(loadeduser.token){
        this.user.next(loadeduser); 
        const expirationduration=new Date(userdata._TokenExpirationDate).getTime() - new Date().getTime()
        this.autoLogOut(expirationduration);
       }
     

    }
    private authenticationtoken(email:string,userid:string,token:string,expiresin:number){
        const expirationdata=new Date(new Date().getTime() + +expiresin*1000);
        const user=new User(
            email,
            userid,
            token,
            expirationdata
            );
            this.user.next(user);
            localStorage.setItem('userdata',JSON.stringify(user));
    }

    logout(){
        this.user.next(null);
        this.router.navigate(['/auth']);
       
        localStorage.removeItem('userdata');

        if(this.tokenExpirationTimer)
        {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer=null;

    }

    autoLogOut(Expirationduration:number){
        console.log(Expirationduration);
        
        this.tokenExpirationTimer=setTimeout(() => {
            this.logout();
        }, Expirationduration);

    }

    private ErrorHandler(errorRes:HttpErrorResponse){
        {
            let errormessage='Unknown error occured';
            if(!errorRes.error.error || !errorRes.error){
               return throwError(errormessage);
                
            }
            switch(errorRes.error.error.message){
                case 'EMAIL_EXISTS':
                    errormessage='This email already exists';
                    break;
                case 'EMAIL_NOT_FOUND':
                    errormessage='Email Not Found';
                    break;
                case 'INVALID_PASSWORD':
                    errormessage='Invalid Password';
            }
            return throwError(errormessage);
        }
    }
}