import { Injectable } from '@angular/core';
import { User} from "./model/user";
import { Project} from "./model/project";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Task } from './model/task';
import { Assigne } from './model/assigne';


@Injectable({
  providedIn: 'root'
})
export class UserService {
   
private _addprojectUrl = "http://localhost:3000/api/addproject";
private _viewprojectsUrl = "http://localhost:3000/api/viewproject";
private _viewprojectByIdUrl = "http://localhost:3000/api/viewproject/";
private _updateprojectUrl = "http://localhost:3000/api/updateproject/";

private _registerUrl = "http://localhost:3000/api/signup";

private _getmanagersUrl = 'http://localhost:3000/api/managers';
private _getmanagerByIdUrl = "http://localhost:3000/api/manager/";
private _updatemanagerUrl = 'http://localhost:3000/api/manager/';
private _deletmanagerUrl = 'http://localhost:3000/api/manager/';

private _addtaskUrl = 'http://localhost:3000/api/addtask';

private _getEmployee = 'http://localhost:3000/api/getemployee'
private _addEmployee = 'http://localhost:3000/api/addemployee'


  constructor(private http:HttpClient) { }

//register method
registerUser(user:User) {
  return this.http.post<any>(this._registerUrl,user)
   }

   //get all managers
  getManagerData(): Observable<User[]>{
    return this.http.get<User[]>(this._getmanagersUrl)
  }

  //get manager by id
  getManagerById(id):Observable<User[]>{
    return this.http.get<User[]>(this._getmanagerByIdUrl+id)
      
  }
  
   //delete manager data
  deleteManager(id): Observable<User>{
    return this.http.delete<User>(this._deletmanagerUrl+id)
  }

  //update manager
  updatemanager(user:User,id){
    return this.http.put(this._updatemanagerUrl+id,user).subscribe(res=>{
      console.log("done");
      
    });
  }

  //add Project
  addproject(project:Project){
       return this.http.post(this._addprojectUrl,project);
  }

  //retrive Projects
  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(this._viewprojectsUrl)
  }

  //get ProjectById
  getProjectById(id):Observable<Project[]>{
    return this.http.get<Project[]>(this._viewprojectByIdUrl+id)    
  }

  //update project
  updateProject(project:Project,id){
    return this.http.put(this._updateprojectUrl+id,project).subscribe(res=>{
      console.log("update successfully");
   })
}

//add task
  addTask(task){
    return this.http.post(this._addtaskUrl,task);
  }

//getEmployess
  getEmployee():Observable<User[]>{
    return this.http.get<User[]>(this._getEmployee)

  }  
  //assigne employee tyo the project
  addEmployee(assigne){
    console.log('assigne',assigne);
    return this.http.post(this._addEmployee, assigne)
  }

}


  
  