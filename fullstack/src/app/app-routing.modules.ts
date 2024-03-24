import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
    {path:'details',component:DetailsComponent},
    {path:'listing/:id',component:ListingComponent},
    {path:'',component:HomeComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    providers:[],
    exports:[RouterModule]
})

export class AppRoutingModule{}