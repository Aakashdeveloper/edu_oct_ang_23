import { Component } from '@angular/core';
import { IMeal } from '../../model/meal.model'

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent {

  constructor() { }

  img1:string="../../assets/images/dinner.png";
  price:number = 912
  openedOn:number = Date.now()

  mealData:IMeal[] = [
    {
      "_id": "6187761a62a1816f88593a4a",
      "mealtype_id": 2,
      "mealtype": "lUNch",
      "content": "Start your day with exclusive breakfast options",
      "meal_image": "https://i.ibb.co/8rPxkWP/lunch.jpg"
    },
    {
      "_id": "6187761a62a1816f88593a4b",
      "mealtype_id": 3,
      "mealtype": "dinner",
      "content": "Start your day with exclusive breakfast options",
      "meal_image": "https://i.ibb.co/XjzPqYv/dinner.jpg"
    },
    {
      "_id": "6187761a62a1816f88593a4e",
      "mealtype_id": 6,
      "mealtype": "NightLife",
      "content": "Start your day with exclusive breakfast options",
      "meal_image": "https://i.ibb.co/q1fC2jW/nightlife.jpg"
    },
    {
      "_id": "6187761a62a1816f88593a4c",
      "mealtype_id": 4,
      "mealtype": "Snacks",
      "content": "Start your day with exclusive breakfast options",
      "meal_image": "https://i.ibb.co/wchCHfb/snacks.jpg"
    },
    {
      "_id": "6187761a62a1816f88593a4d",
      "mealtype_id": 5,
      "mealtype": "Drinks",
      "content": "Start your day with exclusive breakfast options",
      "meal_image": "https://i.ibb.co/YR0S6fV/drinks.jpg"
    },
    {
      "_id": "6187761a62a1816f88593a49",
      "mealtype_id": 1,
      "mealtype": "Breakfast",
      "content": "Start your day with exclusive breakfast options",
      "meal_image": "https://i.ibb.co/FVhSTWK/breakfast.jpg"
    }
  ]

}
