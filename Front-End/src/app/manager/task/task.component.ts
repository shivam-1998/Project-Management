import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
   addForm:FormGroup;
  constructor(private _auth:AuthService,private _router: Router,private userservice:UserService,private route:ActivatedRoute) {
    this.addForm = new FormGroup({
      task_name : new FormControl(),
      planned_start_date : new FormControl(),
      planned_end_date : new FormControl(),
      task_description : new FormControl(),
      task_status : new FormControl(),
      task_review : new FormControl(),
      task_feedback:new FormControl
     }); 
   }

  ngOnInit() {
   
  }

  addtask(){
     const data = this.addForm.value;
     this.route.params.subscribe(params=>{
      console.log(params);
      this.userservice.addTask(data,params['Id']).subscribe(task=>{
        console.log(task);
       this._router.navigate(['projectmanager/viewproject']);   
      })
      
   })
     
     
  }

}
