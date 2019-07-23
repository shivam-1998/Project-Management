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
  object={}


  constructor(private _auth:AuthService,private _router: Router,private userservice:UserService,private route:ActivatedRoute) {
    this.addForm = new FormGroup({
      task_name : new FormControl(null),
      planned_start_date : new FormControl(null),
      planned_end_date : new FormControl(null),
      task_description : new FormControl(null),
      task_status : new FormControl(null),
      task_review : new FormControl(null),
      task_feedback:new FormControl(null)
     }); 
   }

  ngOnInit() {
   
  }

  addtask(){
     const data = this.addForm.value;
     console.log(this.addForm.value.task_name);
 
     this.route.params.subscribe(params=>{
      console.log(params);
      this.object={
       
        p_id:params['Id'],
        task_name:this.addForm.value.task_name,
        planned_start_date:this.addForm.value.planned_start_date,
        planned_end_date:this.addForm.value.planned_end_date,
        task_description:this.addForm.value.task_description,
        task_status:this.addForm.value.task_status,
        task_review:this.addForm.value.task_review,
        task_feedback:this.addForm.value.task_feedback
       }
      
      this.userservice.addTask(this.object).subscribe(task=>{
        console.log(task);
       this._router.navigate(['projectmanager/viewproject']);   
      })
      
   })
     
     
  }

}
