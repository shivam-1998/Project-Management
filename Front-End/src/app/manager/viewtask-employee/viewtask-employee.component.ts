import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Assigne } from 'src/app/model/assigne';

@Component({
  selector: 'app-viewtask-employee',
  templateUrl: './viewtask-employee.component.html',
  styleUrls: ['./viewtask-employee.component.css']
})
export class ViewtaskEmployeeComponent implements OnInit {

  assigne : Assigne[]

  constructor(private userservice:UserService,private router:Router,private route:ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.userservice.viewAssignedEmployees(params['Id']).subscribe(res=>{
        console.log(res);
        // this.assigne.taskTask_id = params['Id'];
        this.assigne = res;
        
      })
    });
}

}