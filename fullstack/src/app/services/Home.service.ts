import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICity } from '../model/location.model';

@Injectable()

export class HomeService{

    private base_url = "http://3.17.216.66:4000";

    constructor(private http:HttpClient){}

    getCity():Observable<ICity[]>{
        return this.http.get<ICity[]>(`${this.base_url}/location`)
    }

    
}