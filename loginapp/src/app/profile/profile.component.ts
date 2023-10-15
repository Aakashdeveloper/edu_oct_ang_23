import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { ILogin,LoginRes,userRes } from '../login/login.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private loginService:LoginService,
            private router:Router) { }

  token:string|null='';
  userInfo:userRes = {
    _id: "",
    name: "",
    email: "",
    phone: "",
    role: "",
    __v: 0
  };

  ngOnInit(): void {
    this.token = localStorage.getItem('Token_Number')
    this.loginService.getUserInfo(this.token?this.token:'')
    .subscribe((res:userRes) => {
      console.log(res)
      this.userInfo = res
    })
  }

  logoutUser():void{
    localStorage.removeItem('Token_Number');
    localStorage.removeItem('Role_Type');
    this.router.navigate(['/login'])
  }

}
