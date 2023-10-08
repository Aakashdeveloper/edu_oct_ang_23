import { NgModule } from '@angular/core';
import { HomeService } from '../services/Home.service';
import { HomeComponent } from './home.component';
import { QuickSearchComponent } from './quick-search/quick-search.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations:[
        HomeComponent,
        SearchComponent,
        QuickSearchComponent,
    ],
    imports:[
        SharedModule
    ],
    providers:[
        HomeService
    ]
})

export class HomeModule{}