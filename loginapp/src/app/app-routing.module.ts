import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProfileGaurdService } from './gaurds/profileGaurd.service';
import { UserGaurdService } from './gaurds/userGaurd.service';

const routes: Routes = [
  {path:'userList',canActivate:[UserGaurdService],component: UserListComponent},
  {path:'profile',canActivate:[ProfileGaurdService],component: ProfileComponent},
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'',component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ProfileGaurdService,
    UserGaurdService
  ]
})
export class AppRoutingModule { }
