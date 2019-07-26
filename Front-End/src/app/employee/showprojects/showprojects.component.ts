import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpserviceService } from 'src/app/empservice.service';

@Component({
  selector: 'app-showprojects',
  templateUrl: './showprojects.component.html',
  styleUrls: ['./showprojects.component.css']
})
export class ShowprojectsComponent implements OnInit {

  constructor(private empservice:EmpserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

  viewProjects(){
     
  }
}
