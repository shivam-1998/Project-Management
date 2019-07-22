import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../model/user';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Role } from '../model/role';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    currentUser :User;
    role:string
  constructor(private auth:AuthService , private route:Router) {
    
   }

  ngOnInit() {
    
    }
    
    isAdmin(){
      this.currentUser = this.auth.currentUserValue;
      if(this.currentUser.role == Role.Admin){
        console.log("can access admin");
        return true;
      } 
      console.log("can't access admin");
      return false;        
    }
     
    isPmOrAdmin(){
      this.currentUser = this.auth.currentUserValue;
      if(this.currentUser.role == Role.Admin || this.currentUser.role == Role.Manager){
        console.log("can access by pm or admin");
        return true;
      } 
      console.log("can't access by employee");
      return false;    
    }
  }
 
