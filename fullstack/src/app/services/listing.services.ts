import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRest } from '../model/rest.model';

@Injectable()

export class ListingService{

    private base_url = "http://3.17.216.66:4000";


    constructor(private http:HttpClient){}

    getRwrtM(mealId:Number): Observable<IRest[]>{
        return this.http.get<IRest[]>(`${this.base_url}/restaurant?mealtype_id=${mealId}`)
    }

    getCuisineData(cuisineId:string): Observable<IRest[]>{
        let mealId =  sessionStorage.getItem('mealId');
        return this.http.get<IRest[]>(`${this.base_url}/filter/${mealId}?cuisine=${cuisineId}`)
    }

    getCostData(lcost:String,hcost:String,mealId:Number):Observable<IRest[]>{
        return this.http.get<IRest[]>(`${this.base_url}/filter/${mealId}?hcost=${hcost}&lcost=${lcost}`)
    }

}