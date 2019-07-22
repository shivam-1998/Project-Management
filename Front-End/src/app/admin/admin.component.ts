import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   manager : User[]
  //  managers = new manager();
  constructor(private auth:AuthService,private route:Router,private userservice:UserService) { }

  ngOnInit() {
  }

  AddUser(){
    this.route.navigate(['/register'])
  }
 
  getmanagers(){
    
      this.route.navigate(['admin/viewmanager']); 
    }

}
