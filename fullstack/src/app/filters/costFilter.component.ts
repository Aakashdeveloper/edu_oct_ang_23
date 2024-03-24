import { Component,Output, EventEmitter } from '@angular/core';

@Component({
    selector:'app-cost-filter',
    templateUrl:'./costFilter.component.html'
})

export class CostFilter{

    costType:string='';

    @Output() costClicked:EventEmitter<string> = new EventEmitter<string>()


    onCostSelect():void{
        this.costClicked.emit(this.costType)
    }
}