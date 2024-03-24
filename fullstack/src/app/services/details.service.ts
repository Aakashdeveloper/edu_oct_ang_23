import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IRest } from '../model/rest.model';
import { environment } from 'src/environments/environment';

@Injectable()

export class DetailsService{

    constructor(private http:HttpClient){}

    getDetails(restId:Number):Observable<IRest[]>{
        return this.http.get<IRest[]>(`${environment.apiUrl}/details/${restId}`)
    }

}