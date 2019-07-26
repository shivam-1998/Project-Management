import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentWrapComponent } from './content-wrap/content-wrap.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from "./auth.service";
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { ReactiveFormsModule , FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './authguard.service';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './employee/employee.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { ViewmanagerComponent } from './admin/viewmanager/viewmanager.component';
import { EditComponent } from './admin/edit/edit.component';
import { ProjectComponent } from "./manager/project/project.component";
import { ViewprojectComponent } from './manager/viewproject/viewproject.component';
import { EditprojectComponent } from './manager/viewproject/editproject/editproject.component';
import { TaskComponent } from './manager/task/task.component';
import { AssigneComponent } from './manager/assigne/assigne.component';
import { ViewtaskComponent } from './manager/viewtask/viewtask.component';
import { ViewtaskEmployeeComponent } from './manager/viewtask-employee/viewtask-employee.component';
import { ReviewComponent } from './manager/review/review.component';
import { ViewemployeeComponent } from './manager/viewemployee/viewemployee.component';
import { ShowprojectsComponent } from './employee/showprojects/showprojects.component';
import { ShowtasksComponent } from './employee/showtasks/showtasks.component';
import { ShowempComponent } from './employee/showemp/showemp.component';
import { ShowreviewComponent } from './employee/showreview/showreview.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentWrapComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    ManagerComponent,
    EmployeeComponent,
    ViewmanagerComponent,
    EditComponent,
    ProjectComponent,
    ViewprojectComponent,
    EditprojectComponent,
    TaskComponent,
    AssigneComponent,
    ViewtaskComponent,
    ViewtaskEmployeeComponent,
    ReviewComponent,
    ViewemployeeComponent,
    ShowprojectsComponent,
    ShowtasksComponent,
    ShowempComponent,
    ShowreviewComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
