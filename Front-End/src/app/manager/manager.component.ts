import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }
  
  AddProject(){
     this._router.navigate(['projectmanager/project']);
  }

  Viewprojects(){
    this._router.navigate(['projectmanager/viewproject']);
  }

  Viewtask(){
    this._router.navigate(['projectmanager/viewtask']);
  }
}
