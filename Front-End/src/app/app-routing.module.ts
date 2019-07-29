import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './authguard.service';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { Role } from "./model/role";
import { ViewmanagerComponent } from './admin/viewmanager/viewmanager.component';
import { EditComponent } from './admin/edit/edit.component';
import { ProjectComponent } from './manager/project/project.component';
import { ViewprojectComponent } from './manager/viewproject/viewproject.component';
import { EditprojectComponent } from './manager/viewproject/editproject/editproject.component';
import { TaskComponent } from './manager/task/task.component';
import { AssigneComponent } from './manager/assigne/assigne.component';
import { ViewtaskComponent } from './manager/viewtask/viewtask.component';
import { ViewtaskEmployeeComponent } from './manager/viewtask-employee/viewtask-employee.component';
import { ReviewComponent } from './manager/review/review.component';
import { ViewemployeeComponent } from './manager/viewemployee/viewemployee.component';
import { ShowempComponent } from './employee/showemp/showemp.component';
import { ShowprojectsComponent } from './employee/showprojects/showprojects.component';
import { ShowtasksComponent } from './employee/showtasks/showtasks.component';
import { ShowreviewComponent } from './employee/showreview/showreview.component';
import { ViewprojectstatusComponent } from './admin/viewprojectstatus/viewprojectstatus.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },

  { path: 'sidebar', component: SidebarComponent, canActivate: [AuthGuardService] },

  { path: 'register', component: RegisterComponent, canActivate: [AuthGuardService] },

  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuardService], data: { roles: [Role.Admin] },
    children: [
      { path: 'viewmanager', component: ViewmanagerComponent },
      { path: 'edit/:Id', component: EditComponent },
      { path: 'viewprojectstatus', component: ViewprojectstatusComponent },
    ]
  },

  {
    path: 'projectmanager', component: ManagerComponent, canActivate: [AuthGuardService], data: { roles: [Role.Manager, Role.Admin] },
    children: [
      { path: 'project', component: ProjectComponent },
      { path: 'review/:Id', component: ReviewComponent },
      { path: 'viewemployee/:Id/:ID', component: ViewemployeeComponent },
      { path: 'viewtask/:Id', component: ViewtaskComponent },
      { path: 'viewtaskemployee/:Id', component: ViewtaskEmployeeComponent },
      { path: 'assigne/:Id', component: AssigneComponent },
      { path: 'task/:Id', component: TaskComponent },
      {
        path: 'viewproject', component: ViewprojectComponent,
        children: [
          { path: 'editproject/:Id', component: EditprojectComponent }
        ]
      }
    ]
  },

  {
    path: 'employee', component: EmployeeComponent, canActivate: [AuthGuardService], data: { roles: [Role.Employee, Role.Manager, Role.Admin] },
    children: [
      { path: 'showemp', component: ShowempComponent },
      { path: 'showprojects', component: ShowprojectsComponent },
      { path: 'showtasks', component: ShowtasksComponent },
      { path: 'showreview', component: ShowreviewComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
