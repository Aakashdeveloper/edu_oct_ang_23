import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class RegisterService{
    private empUrl = "http://3.17.216.66:5000/api/auth/register"

    constructor(private http: HttpClient){}

    registerEmp(employee:any[]):Observable<any[]>{
        return this.http.post<any[]>(this.empUrl,employee)
    }
}