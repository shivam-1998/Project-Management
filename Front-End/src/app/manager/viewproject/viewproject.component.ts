import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Project } from 'src/app/model/project';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/task';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.css']
})
export class ViewprojectComponent implements OnInit {
  project:Project[]
  task:Task[];
  user:User[];
  submitted=false;
  constructor(private userservice:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.fetchdata();
  }

  fetchdata(){
    
    this.userservice.getProjects().subscribe(project=>{
      console.log(project);
      this.project = project;
      console.log(this.project);
      
  });
  }
  
  edit(id){
    this.userservice.getProjectById(id).subscribe(result=>{
      console.log(result);
      this.router.navigate(['projectmanager/viewproject/editproject',+id]);    
    })
  }

  addTask(id){
       this.router.navigate(['projectmanager/task',+id]);  
  }

  addemployee(id){
    this.router.navigate(['projectmanager/assigne',+id])
  }

}
