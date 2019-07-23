import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { Assigne } from 'src/app/model/assigne';

@Component({
  selector: 'app-assigne',
  templateUrl: './assigne.component.html',
  styleUrls: ['./assigne.component.css']
})
export class AssigneComponent implements OnInit {
  user:User[];
  assigne = {
    firstname:String,
    lastname:String,
    email:String  
  };
  constructor(private userservice:UserService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
      this.userservice.getEmployee().subscribe(emp=>{
        console.log(emp);
        this.user=emp;
     })
  }
  assigneTo(fname,lname,email){
    this.assigne.firstname = fname
    this.assigne.lastname = lname
    this.assigne.email = email
    console.log(this.assigne);
    
     this.route.params.subscribe(params=>{
       console.log(params);
       this.userservice.addEmployee(this.assigne,params['Id'])
      })

  }
      

}
