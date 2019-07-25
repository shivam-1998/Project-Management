import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { map, catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { User } from "./model/user";


@Injectable()
export class AuthService {
  
  private currentUserSubject : BehaviorSubject<User>;
  public currentUser : Observable<User>;

  private _loginUrl = "http://localhost:3000/api/signin";
 
  constructor(private http: HttpClient,private _router: Router) {
       this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
       this.currentUser = this.currentUserSubject.asObservable(); 
      }
  
  public get currentUserValue():User{
    return this.currentUserSubject.value;
  }    
  
  
  //login method
  loginUser(username:string,password:string) {
    return this.http.post<any>(this._loginUrl,{username,password})
    .pipe(catchError(this.handleError),
      map(user=>{
      // login successful if there's a jwt token in the response
      console.log(user.role);
      
      if(user && user.accessToken){
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser',JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
      return user;
    }))
     
  }
  
 //logout method
  logoutUser() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  
  //get the token 
  getToken() {
    return localStorage.getItem('currentUser');
  }
  
  handleError(error:HttpErrorResponse){
     let msg = "Unknown error occured"
     if(!error){
       return throwError(msg);
     }
     switch(error.status){
       case 500:
         msg="User not found";
         break;
       case 401:
         msg="Invalid Password";
         break;  
     }
      return throwError(msg);
  }
}