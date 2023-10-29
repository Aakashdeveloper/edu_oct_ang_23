import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ILogin,LoginRes,userRes } from './login.model';
import { LoginService } from './login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService,
              private router:Router) { }
  
  myEmployee = new ILogin('rajeev@gmail.com','12345678')
  loginError:string='';


  ngOnInit(): void {
  }

  submitForm(Form:NgForm):void{
    console.log(Form.value)
    this.loginService.loginEmp(Form.value)
      .subscribe((res:LoginRes) => {
        this.loginError = '';
        this.loginService.getUserInfo(res['token'])
        .subscribe((response:userRes) => {
          this.validateUser(response['role'],response['name'],
          response['email'],response['phone'])
        })
      },
        (err:any[]) => {
          this.loginError="Please Enter Valid Information"
        })
  }

  validateUser(roleType: string,name: string,email: string,phone: string) {
    let userResponse = `${roleType},${name},${email},${phone}`;
    localStorage.setItem('userResponse',userResponse);
    localStorage.setItem('Role_Type',roleType);
    this.router.navigate(['/'])
  }

}
