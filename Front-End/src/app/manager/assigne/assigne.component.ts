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
      console.log(this.assigne);
      
      this.userservice.addEmployeeToProject(this.assigne).subscribe(resp => {
        console.log(resp);
      })

    })
  }
  //Assigne to Task
 AssigneToTask(fname, lname, email) {
    this.assigne.firstname = fname
    this.assigne.lastname = lname
    this.assigne.email = email
    
    this.route.params.subscribe(params => {
      console.log(params);
      this.assigne.Id = params['Id'];
      console.log(this.assigne);
      
      this.userservice.addEmployeeToTask(this.assigne).subscribe(resp => {
        console.log(resp);
      })

    })
  }


}
