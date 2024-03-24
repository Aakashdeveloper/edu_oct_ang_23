import {Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRest } from '../model/rest.model';
import { DetailsService } from '../services/details.service';

@Component({
    templateUrl:'./details.component.html',
    styleUrls:['./details.component.css']
})

export class DetailsComponent implements OnInit{

    id:Number = 0;
    name:String|null=''
    details: IRest[] = [];
    mealId: string | null = sessionStorage.getItem('mealId')
    constructor(private route: ActivatedRoute,
                private detailsService: DetailsService){}

    ngOnInit(){
        this.id = Number(this.route.snapshot.queryParamMap.get('restId'));
        this.name = this.route.snapshot.queryParamMap.get('name');
        this.detailsService.getDetails(this.id)
            .subscribe((data:IRest[]) =>  this.details= data)
        
    }
}