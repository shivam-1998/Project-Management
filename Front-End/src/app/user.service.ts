import { Injectable } from '@angular/core';
import { User } from "./model/user";
import { Project } from "./model/project";
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Task } from './model/task';
import { Assigne } from './model/assigne';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  //projectsUrl   
  private _addprojectUrl = "http://localhost:3000/api/addproject";
  private _viewprojectsUrl = "http://localhost:3000/api/viewproject";
  private _viewprojectByIdUrl = "http://localhost:3000/api/viewproject/";
  private _updateprojectUrl = "http://localhost:3000/api/updateproject/";
  //RegisterUrl
  private _registerUrl = "http://localhost:3000/api/signup";
  //ManagersUrl
  private _getmanagersUrl = 'http://localhost:3000/api/managers';
  private _getmanagerByIdUrl = "http://localhost:3000/api/manager/";
  private _updatemanagerUrl = 'http://localhost:3000/api/manager/';
  private _deletmanagerUrl = 'http://localhost:3000/api/manager/';
  //TasksUrl
  private _addtaskUrl = 'http://localhost:3000/api/addtask';
  private _gettaskUrl = 'http://localhost:3000/api/gettasks/';
  private _viewassignedemployeeUrl = 'http://localhost:3000/api/viewassignedEmployee/'
  //EmployeesURl
  private _getEmployee = 'http://localhost:3000/api/getemployee';
  private _addEmployee = 'http://localhost:3000/api/addemployee';
  private _addEmployeeToTaskURl = 'http://localhost:3000/api/postemployee/'
  private _viewEmployee = 'http://localhost:3000/api/getassignedemployee/'
  //review
  private _addreview = 'http://localhost:3000/api/postreview'

  constructor(private http: HttpClient) { }

  //register method
  registerUser(user: User) {
    return this.http.post<any>(this._registerUrl, user)
    .pipe(catchError(this.handleError),
      map(user=>{}))
  }

  handleError(error:HttpErrorResponse){
    let msg = "Uknown error occured"
    if(!error){
      return throwError(msg);
    }
    switch(error.status){
      case 500:
        msg="Username is already taken"
        break;
      case 550:
        msg="Email already exists"
        break;  
    }
    return throwError(msg);
  }

  //get all managers
  getManagerData(): Observable<User[]> {
    return this.http.get<User[]>(this._getmanagersUrl)
  }

  //get manager by id
  getManagerById(id): Observable<User[]> {
    return this.http.get<User[]>(this._getmanagerByIdUrl + id)

  }

  //delete manager data
  deleteManager(id): Observable<User> {
    return this.http.delete<User>(this._deletmanagerUrl + id)
  }

  //update manager
  updatemanager(user: User, id) {
    return this.http.put(this._updatemanagerUrl + id, user).subscribe(res => {
      console.log("done");

    });
  }

  //add Project
  addproject(project: Project) {
    return this.http.post(this._addprojectUrl, project);
  }

  //retrive Projects
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this._viewprojectsUrl)
  }

  //get ProjectById
  getProjectById(id): Observable<Project[]> {
    return this.http.get<Project[]>(this._viewprojectByIdUrl + id)
  }

  //update project
  updateProject(project: Project, id) {
    return this.http.put(this._updateprojectUrl + id, project).subscribe(res => {
      console.log("update successfully");
    })
  }

  //add task
  addTask(task) {
    return this.http.post(this._addtaskUrl, task);
  }

  //getTasks
  getTasks(id): Observable<Task[]> {
    return this.http.get<Task[]>(this._gettaskUrl + id)
  }

  //getEmployess
  getEmployee(): Observable<User[]> {
    return this.http.get<User[]>(this._getEmployee)

  }
  //assigne employee to the project
  addEmployeeToProject(assigne) {
    console.log(assigne);
    return this.http.post(this._addEmployee, assigne)
  }

  // assigne employee to the task
  addEmployeeToTask(assigne, id) {
    console.log(assigne, id);
    return this.http.put(this._addEmployeeToTaskURl + id, assigne)
  }

  //view assigned employee to task
  viewAssignedEmployees(id): Observable<Assigne[]> {
    return this.http.get<Assigne[]>(this._viewassignedemployeeUrl + id);
  }

  //Add Review
  addreview(review) {
    return this.http.post(this._addreview, review);
  }

  //view assigned employees
  viewEmployee(id): Observable<Assigne[]> {
    console.log(id);

    return this.http.get<Assigne[]>(this._viewEmployee + id);
  }
}



