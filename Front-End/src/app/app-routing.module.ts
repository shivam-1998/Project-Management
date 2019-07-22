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

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
  {path:'sidebar',component:HomeComponent,canActivate:[AuthGuardService]},
  {path:'register',component:RegisterComponent,canActivate:[AuthGuardService]},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuardService],data:{roles:[Role.Admin]},children:[
    {path:'viewmanager',component:ViewmanagerComponent},{path:'edit/:Id',component:EditComponent}
  ]},
  {path:'projectmanager',component:ManagerComponent,canActivate:[AuthGuardService],data:{roles:[Role.Manager,Role.Admin]},children:[
    {path:'project',component:ProjectComponent},{path:'task',component:TaskComponent}, {path:'viewproject',component:ViewprojectComponent,children:[
      {path:'editproject/:Id',component:EditprojectComponent}
    ]}
  ]},
  {path:'employee',component:EmployeeComponent,canActivate:[AuthGuardService],data:{roles:[Role.Employee,Role.Manager,Role.Admin]}}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
