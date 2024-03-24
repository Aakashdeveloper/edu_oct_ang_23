import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICity } from '../model/location.model';
import { IRest } from '../model/rest.model';
import { IMeal } from '../model/meal.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})

export class HomeService{
    //base_url = "http://3.17.216.66:4000";

    constructor(private http:HttpClient){}

    getCityData():Observable<ICity[]>{
        return this.http.get<ICity[]>(`${environment.apiUrl}/location`)
    }

    getRestWrtCity(stateId:number):Observable<IRest[]>{
        return this.http.get<IRest[]>(`${environment.apiUrl}/restaurant?stateId=${stateId}`)
    }

    getMeal():Observable<IMeal[]>{
        return this.http.get<IMeal[]>(`${environment.apiUrl}/quicksearch`)
    }
    
}