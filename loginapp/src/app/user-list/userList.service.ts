import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class UserService{
    private baseUrl = "http://3.17.216.66:5000/api/auth/users"

    constructor(private http: HttpClient){}

    userList():Observable<any[]>{
        return this.http.get<any[]>(`${this.baseUrl}`)
    }

}