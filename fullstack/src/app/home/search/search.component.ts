import { Component,OnInit,OnChanges } from '@angular/core';
import { ICity } from '../../model/location.model';
import { HomeService } from '../../services/Home.service';
import { IRest} from '../../model/rest.model';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit,OnChanges  {
  title:string = "Find Best Place Near You";
  logo:string = "D"
  disabled:boolean = true
  restaurants:IRest[] = []
  cities:ICity[] = []

  // anything  that need to declare
  constructor(private homeService:HomeService) {
    console.log(">>>>inside constructor>>")
   }

  // when the component will load
  ngOnInit(): void {
    console.log(">>>>inside ngOnInit>>")
    // const api1 = this.homeService.getCityData();
    // const api2 = this.homeService.getMeal();

    // forkJoin([api1,api2]).subscribe((result) => {
    //   console.log(">>>0>>>",result[0])
    //   console.log(">>>1>>>>",result[1])
    // })

    this.homeService.getCityData()
      .subscribe((data:ICity[]) => this.cities = data)
  }

  // Trigger on event change
  ngOnChanges():void{
    console.log(">>>>inside ngOnChanges>>")
    
  }


  handleCity(event:Event){
    console.log((event.target as HTMLInputElement).value)
    if((event.target as HTMLInputElement).value !== "default"){
      this.disabled = false
      let stateId = Number((event.target as HTMLInputElement).value );
      try{
        this.homeService.getRestWrtCity(stateId)
        .subscribe(
          (data:IRest[]) => this.restaurants = data)
      }catch(err){
        console.log(err)
      }
      

    }else{
      this.disabled = true
    }
  }

}
