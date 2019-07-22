import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
    addForm:FormGroup;
    submitted:false
  
  constructor(private _auth:AuthService,private _router: Router,private userservice:UserService) {
    this.addForm = new FormGroup({
      p_name : new FormControl(),
      p_type : new FormControl(),
      p_start_date : new FormControl(),
      p_end_date : new FormControl(),
      p_desc : new FormControl(),
      p_status : new FormControl()
     }); 
   }

  ngOnInit() {
  }
  
  addproject(){
    const data = this.addForm.value;
    console.log(data);
    this.userservice.addproject(data).
    subscribe(result=>{
        console.log(result);
        this._router.navigate(['projectmanager']);
        
    })
    
  }
}
