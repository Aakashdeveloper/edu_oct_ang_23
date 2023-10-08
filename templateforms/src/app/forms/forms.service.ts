import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class FormService{
    private empUrl = "http://localhost:8800/users"

    constructor(private http: HttpClient){}

    postEmp(employee:any[]):Observable<any[]>{
        return this.http.post<any[]>(this.empUrl,employee)
    }
}