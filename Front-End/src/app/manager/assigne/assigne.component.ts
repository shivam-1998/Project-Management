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
  user: User[];
  show=false;
  assigne = {
    Id:String,
    firstname: String,
    lastname: String,
    email: String
  };
  constructor(private userservice: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userservice.getEmployee().subscribe(emp => {
      console.log(emp);
      this.user = emp;
    })
  }
  //Assigne to Project
  AssigneToProject(fname, lname, email) {
    this.assigne.firstname = fname
    this.assigne.lastname = lname
    this.assigne.email = email

    this.route.params.subscribe(params => {
      console.log(params);
       
      this.assigne.Id = params['Id'];
      // console.log(this.assigne);
      
      this.userservice.addEmployeeToProject(this.assigne).subscribe(resp => {
        console.log(resp);

      })
         this.router.navigate(['projectmanager/viewproject']);
    })
  }
  // AssigneToProject(assigne){
  //   this.route.params.subscribe(params =>{
  //    this.userservice.addEmployeeToProject(assigne,params['Id']).subscribe(emp=>{
  //        console.log(emp);
         
  //    })      
  //       this.router.navigate(['projectmanager/viewproject']);
  //   })
  }




