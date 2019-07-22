import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {
  editForm:FormGroup;
  project;
  constructor(private router:Router,private userservice:UserService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      p_name : new FormControl(null,Validators.required),
      p_type : new FormControl(null,Validators.required),
      p_start_date : new FormControl(null,Validators.required),
      p_end_date : new FormControl(null,Validators.required),
      p_desc : new FormControl(null,Validators.required),
      p_status : new FormControl(null,Validators.required)
     }); 
      
      
       //retrive data from table
       this.route.params.subscribe(params=>{
        this.userservice.getProjectById(params['Id']).subscribe(res=>{
          console.log(res);
          this.project=res;

          //set formcontrol values
          this.editForm.setValue({
            p_name:this.project.project_name,
            p_type:this.project.project_type,
            p_start_date:this.project.project_start_date,
            p_end_date:this.project.project_end_date,
            p_desc:this.project.project_description,
            p_status:this.project.project_status
          })
  });
  
});

}
 
//Update project
update(){
  const data = this.editForm.value;
  console.log(data);
  this.route.params.subscribe(params=>{
    console.log(params);
    
   this.userservice.updateProject(data,params['Id']);
       console.log("update successfully");
       this.router.navigate(['projectmanager/viewproject']);      
   });
  
} 
}