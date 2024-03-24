import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import {map, combineLatestAll} from 'rxjs/operators';

@Injectable()

export class DataService{
    constructor(private http:HttpClient){}

    getDataFromApi1():Observable<any>{
        return this.http.get('api')
    }

    getDataFromApi2():Observable<any>{
        return this.http.get('api')
    }

    getDataFromBothEndpoint():Observable<any>{
        const Observable1$ = this.getDataFromApi1();
        const Observable2$ = this.getDataFromApi2();

        const combined$ = [Observable1$,Observable2$].pipe(combineLatestAll())
        return combined$
    }


}