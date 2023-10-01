import { Component,OnInit } from '@angular/core';
import { IMeal } from '../../model/meal.model';
import { HomeService } from '../../services/Home.service';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  img1:string="../../assets/images/dinner.png";
  price:number = 912
  openedOn:number = Date.now()

  mealData:IMeal[] = []

  ngOnInit(): void {
    this.homeService.getMeal()
      .subscribe((data:IMeal[]) => this.mealData = data)
  }

}
