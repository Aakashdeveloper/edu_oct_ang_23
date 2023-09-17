import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/search/search.component';
import { QuickSearchComponent } from './home/quick-search/quick-search.component';

@NgModule({
    // All the component & pipes
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        SearchComponent,
        QuickSearchComponent
    ],

    // All the modules
    imports: [
        BrowserModule
    ],

    // All the services
    providers:[],

    // only and only main component
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}