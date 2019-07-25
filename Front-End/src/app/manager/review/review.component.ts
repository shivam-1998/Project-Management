import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  addForm :FormGroup;
  review = {}

  constructor(private userservice:UserService,private route:ActivatedRoute,private router:Router) {
    this.addForm = new FormGroup({
      task_review : new FormControl(null,Validators.required),
      task_feedback : new FormControl(null,Validators.required),
     }); 
   }

  ngOnInit() {
  }
  
  submit(){
    // const data = this.addForm.value; 
    this.route.params.subscribe(params=>{
     console.log(params);
     this.review={
       task_id:params['Id'],
       task_review:this.addForm.value.task_review,
       task_feedback:this.addForm.value.task_feedback,
      }
     
     this.userservice.addreview(this.review).subscribe(task=>{
       console.log(task);
      this.router.navigate(['projectmanager/viewproject']);   
     })
     
  })
  }
}
