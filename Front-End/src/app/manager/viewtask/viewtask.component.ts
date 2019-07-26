import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  task:Task[];
  constructor(private userservice:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.fetchdata();
  }
  fetchdata(){
     //getTasks
     this.route.params.subscribe(params=>{
      this.userservice.getTasks(params['Id']).subscribe(task=>{    
        this.task = task;
    });  
     });
       }
  //assigneEmloyeeToTask
  assigneTotask(id){
     this.route.params.subscribe(params=>{
      this.router.navigate(['projectmanager/viewemployee',+id,params['Id']]);
     })
    
  }
  
  //viewAssignedEmployees
  viewAssignedEmployees(id){
    this.router.navigate(['projectmanager/viewtaskemployee',+id])
  }

  //Add review and Feedback
  addReviewAndFeedabck(id){
     this.router.navigate(['projectmanager/review',+id]);
  }
}
