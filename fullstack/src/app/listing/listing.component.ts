import {Component, OnInit} from '@angular/core';
import { ListingService } from '../services/listing.service';
import { ActivatedRoute } from '@angular/router';
import { IRest } from '../model/rest.model';

@Component({
    selector:'app-listing',
    templateUrl:'./listing.component.html',
    styleUrls:['./listing.component.css']
})

export class ListingComponent implements OnInit {
    mealId:number = 1;
    restaurants: IRest[] = [];
    userInput:string=''
    filterText:string = 'Cuisine Filter'


    constructor(
        private route:ActivatedRoute,
        private listingService:ListingService
    ){}


    ngOnInit(): void {
        this.mealId = this.route.snapshot.params['id'];
        sessionStorage.setItem('mealId',this.mealId.toString())
        this.listingService.getWrtM(this.mealId)
            .subscribe((data:IRest[]) => {
                this.restaurants = data
            })
    }


    dataReceive(cuisineId:string){
        console.log("In Parent "+cuisineId);
        this.listingService.getCuisineData(cuisineId,this.mealId)
        .subscribe((data:IRest[]) => {
            this.restaurants = data
        })
    }

    costDataReceive(cost:string){
        let lcost = cost.split('-')[0];
        let hcost = cost.split('-')[1];
        this.listingService.getCostData(lcost,hcost,this.mealId)
        .subscribe((data:IRest[]) => {
            this.restaurants = data
        })
    }
}
