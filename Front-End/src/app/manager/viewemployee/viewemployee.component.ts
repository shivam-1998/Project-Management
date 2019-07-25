import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Assigne } from 'src/app/model/assigne';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  assigne:Assigne[];
  constructor(private router:Router,private route:ActivatedRoute,private userservice:UserService) { }

  ngOnInit() {
      this.route.params.subscribe(params=>{
        this.userservice.viewEmployee(params['Id']).subscribe(emp=>{
             console.log(emp);
             
              this.assigne=emp;
        })
      })
      
  }

}
