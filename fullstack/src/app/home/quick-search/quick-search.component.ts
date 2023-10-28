import { Component,OnInit } from '@angular/core';
import { IMeal } from '../../model/meal.model';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../../services/Home.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent implements OnInit {

  constructor(
    private homeService: HomeService,
    private http:HttpClient) { }

  img1:string="../../assets/images/dinner.png";
  price:number = 912
  openedOn:number = Date.now()

  mealData:IMeal[] = []

  ngOnInit() {
    this.getDataFromApi().subscribe((result) => {
      this.mealData = result;
    });
  }

  getDataFromApi(): Observable<any[]> {
    const apiUrl = 'http://3.17.216.66:4000/quicksearch';

    return this.http.get(apiUrl).pipe(
      map((response: any) => {
        console.log("response",response)
        return response; 
      })
    );
  }

  // ngOnInit(): void {
  //   this.homeService.getMeal()
  //     .subscribe((data:IMeal[]) => this.mealData = data)
  // }

}
