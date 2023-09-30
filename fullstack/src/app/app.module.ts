import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/search/search.component';
import { QuickSearchComponent } from './home/quick-search/quick-search.component';
import { MyUpperPipe } from './pipes/myUpper.pipe';
import { HomeService } from './services/Home.service';

@NgModule({
    // All the component & pipes
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        SearchComponent,
        QuickSearchComponent,
        MyUpperPipe
    ],

    // All the modules
    imports: [
        BrowserModule,
        HttpClientModule
    ],

    // All the services
    providers:[
        HomeService
    ],

    // only and only main component
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}