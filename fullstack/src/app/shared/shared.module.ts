import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { MyUpperPipe } from '../pipes/myUpper.pipe';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations:[
        MyUpperPipe
    ],
    imports:[
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CommonModule
    ],
    exports:[
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        MyUpperPipe
    ]
})

export class SharedModule{}