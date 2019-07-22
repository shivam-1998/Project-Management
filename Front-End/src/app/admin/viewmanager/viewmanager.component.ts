import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/model/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewmanager',
  templateUrl: './viewmanager.component.html',
  styleUrls: ['./viewmanager.component.css']
})
export class ViewmanagerComponent implements OnInit {
  manager :User[]
  constructor(private userservice:UserService,private http:HttpClient,private router:Router) {
  }

  ngOnInit() {
   this.fetchdata();
  
}
 //fetch managers
fetchdata(){
  this.userservice.getManagerData().subscribe(manager=>{
    console.log(manager);
    this.manager = manager;
});
}

//delete manager by Id
delete(id){
    this.userservice.deleteManager(id).subscribe(result =>{
         console.log(result);
         this.manager.splice(id);
         this.fetchdata();
         this.router.navigate(['admin/viewmanager']);
     })
  }

 //edit manager
 edit(id){
    this.userservice.getManagerById(id).subscribe(result=>{
      console.log(result);
      // this.manager=result;
      this.router.navigate(['admin/edit',+id]);
    })
 }
}
