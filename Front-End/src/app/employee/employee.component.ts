import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { EmpserviceService } from '../empservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empservice:EmpserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }
  
  viewProjects(){
     this.router.navigate(['employee/showprojects']);
  }
}
