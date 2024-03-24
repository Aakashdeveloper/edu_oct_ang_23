import {Component, OnInit} from '@angular/core';
import { ListingService } from '../services/listing.services';
import { IRest } from '../model/rest.model';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-listing',
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit{
    mealId:number = 1;
    restaurants: IRest[] = [];
    userInput:string=''
    filterText:string = "Cuisine Option"

    constructor(private route: ActivatedRoute,
                private listingService:ListingService){}

    ngOnInit():void{
        this.mealId = Number(this.route.snapshot.params['id']);
        sessionStorage.setItem('mealId',this.mealId.toString());
        this.listingService.getRwrtM(this.mealId)
            .subscribe((data:IRest[]) => {
                this.restaurants = data
            })
    }

    dataReceive(cuisineId:string){
        console.log("In Parent "+cuisineId)
        this.listingService.getCuisineData(cuisineId)
            .subscribe((data:IRest[]) => {
                this.restaurants = data
            })
    }

    costDataReceive(cost:string){
        let lcost = cost.split('-')[0]
        let hcost = cost.split('-')[1];
        this.listingService.getCostData(lcost,hcost,this.mealId)
            .subscribe((data:IRest[]) => {
                this.restaurants = data
            })
    }

}