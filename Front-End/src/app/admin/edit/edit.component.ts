import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    
   manager;
   editForm:FormGroup

  constructor(private router:Router,private userservice:UserService,private route:ActivatedRoute) {
   
   }

  ngOnInit() {
   this.editForm = new FormGroup({
          firstname : new FormControl(null,Validators.required),
          lastname : new FormControl(null,Validators.required),
          email : new FormControl(null,Validators.required),
         username : new FormControl(null,Validators.required),
          dob : new FormControl(null,Validators.required),
         });  
         //retrive data from table
         this.route.params.subscribe(params=>{
          this.userservice.getManagerById(params['Id']).subscribe(res=>{
            console.log(res);
            this.manager=res;
         
            //set formcontrol values
            this.editForm.setValue({
              firstname:this.manager.firstname,
              lastname:this.manager.lastname,
              email:this.manager.email,
              username:this.manager.username,
              dob:this.manager.dob
            })
          });
 });
   
} 

//Update manager
update(){
   const data = this.editForm.value;
   console.log(data);
   this.route.params.subscribe(params=>{
    this.userservice.updatemanager(data,params['Id']);
        console.log("update successfully");
        this.router.navigate(['admin/viewmanager']);      
    });
   
}


}