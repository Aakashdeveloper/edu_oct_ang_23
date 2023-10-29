import {Component, OnInit} from '@angular/core';
import { LoginService} from '../login/login.service';
import {Router} from '@angular/router';
import {userRes} from '../login/login.model';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent implements OnInit {
    fontSize = '10px'
    constructor(
        private loginService:LoginService,
        private router: Router
    ){}

    token:string|null = '';
    loginStatus:boolean = false;

    userInfo:userRes = {
        "_id":"",
        "name":"",
        "email":"",
        "phone":"",
        "role":"",
        "__v":0
    }

    ngOnInit():void{
        this.token = localStorage.getItem("Token_Number")?localStorage.getItem("Token_Number"):'';
        this.loginService.getUserInfo(this.token?this.token:'')
            .subscribe((res:userRes) => {
                this.userInfo = res;
                this.loginStatus = true
            })
    }
   
    logoutUser():void{
        localStorage.removeItem("Token_Number")
        localStorage.removeItem("Role_Type")
        this.loginStatus = false;
        this.router.navigate(['/'])
        window.location.reload()
    }
}