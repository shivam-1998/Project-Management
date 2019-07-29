import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-viewprojectstatus',
  templateUrl: './viewprojectstatus.component.html',
  styleUrls: ['./viewprojectstatus.component.css']
})
export class ViewprojectstatusComponent implements OnInit {
   project:Project[];
  constructor(private userservice:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
     this.userservice.getProjects().subscribe(res=>{
         this.project = res;
     })
  }

}
