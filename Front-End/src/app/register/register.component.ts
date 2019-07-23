import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   
  registerForm : FormGroup;
  message=null
  constructor(private _auth: AuthService,private _router: Router,private userservice:UserService) {
    this.registerForm = new FormGroup({
        firstname : new FormControl(null,[Validators.required,Validators.minLength(3)]),
        lastname : new FormControl(null,[Validators.required,Validators.minLength(3)]),
        email : new FormControl(null,[Validators.required,Validators.email]),
        password : new FormControl(null,[Validators.required,Validators.minLength(5)]),
        username : new FormControl(null,[Validators.required,,Validators.minLength(5)]),
        dob : new FormControl(null,Validators.required),
        role : new FormControl(null,Validators.required)
       }); 
 }

  ngOnInit() {
  }

  registerUser() {
    const data = this.registerForm.value
    console.log(data);
    this.userservice.registerUser(data)
    .subscribe(
      res => {
        console.log(res);
        
        this._router.navigate(['/admin'])  
      },
      err => {console.log(err)},
    )      
  }


}
