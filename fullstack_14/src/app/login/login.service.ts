import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin,LoginRes,userRes } from './login.model';

@Injectable()

export class LoginService{
    private baseUrl = "http://3.17.216.66:5000/api/auth"

    constructor(private http: HttpClient){}

    loginEmp(employee:any[]):Observable<LoginRes>{
        return this.http.post<LoginRes>(`${this.baseUrl}/login`,employee)
    }

    getUserInfo(token:string):Observable<userRes>{
        localStorage.setItem('Token_Number',token)
        return this.http.get<userRes>(`${this.baseUrl}/userinfo`,{headers:{'x-access-token':token}})
    }
}