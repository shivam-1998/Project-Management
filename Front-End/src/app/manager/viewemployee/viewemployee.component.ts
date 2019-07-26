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
        console.log(params);
        this.userservice.viewEmployee(params['ID']).subscribe(emp=>{
              this.assigne=emp;
        });
      });
      }

      AssigneToTask(assigne){
         this.route.params.subscribe(params=>{
            this.userservice.addEmployeeToTask(assigne,params['Id']).subscribe(emp=>{

            })
         })
      }    

}
