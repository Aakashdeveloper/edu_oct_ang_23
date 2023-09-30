import { Component,OnInit,OnChanges } from '@angular/core';
import { ICity } from '../../model/location.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit,OnChanges  {
  title:string = "Find Best Place Near You";
  logo:string = "D"
  disabled:boolean = true

  cities:ICity[] = []

  // anything  that need to declare
  constructor() { }

  // when the component will load
  ngOnInit(): void {

  }

  // Trigger on event change
  ngOnChanges():void{

  }


  handleCity(event:Event){
    console.log((event.target as HTMLInputElement).value)
    if((event.target as HTMLInputElement).value !== "default"){
      this.disabled = false
    }else{
      this.disabled = true
    }
  }

}
