import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm : FormGroup
  returnUrl: string;
  submitted = false;
  loading= false;
  msg=null;
  constructor(private _auth: AuthService,private _router: Router,private route: ActivatedRoute,) { 
    this.loginForm = new FormGroup({
      username : new FormControl(null,[Validators.required,Validators.minLength(4)]),
      password : new FormControl(null,[Validators.required,Validators.minLength(5)])
    });
    if (this._auth.currentUserValue) {
      console.log(this._auth.currentUserValue);
       
      this._router.navigate(['/home']);
  }
  }
          
  ngOnInit() {
  }
  
  onSubmit() {
    this.submitted = true;

    const data = this.loginForm.value
    this.loading = true;
    
    this._auth.loginUser(data.username,data.password)
    .subscribe(
      res => {
        this._router.navigate(['/home']);
        console.log("login");
        
      },
      msg => {console.log(msg);
      this.msg=msg;
      }
    ) 
   
    
  }
}
