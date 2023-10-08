import { NgModule } from '@angular/core';
import { CostFilterComoponent } from '../filters/costFilter.component';
import { CuisineFilterComponent } from '../filters/cuisineFilter.component';
import { RestSearchFilter } from '../pipes/searchFilter.pipe';
import { ListingService } from '../services/listing.services';
import { SharedModule } from '../shared/shared.module';
import { ListingComponent } from './listing.component';


@NgModule({
    declarations:[
        ListingComponent,
        RestSearchFilter,
        CuisineFilterComponent,
        CostFilterComoponent
    ],
    imports:[
        SharedModule
    ],
    providers:[
        ListingService
    ]
})

export class ListingModule{}