import {Component,Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'app-cost-filter',
    templateUrl: './costFilter.component.html'
})

export class CostFilterComoponent{
    costType:string=''

    @Output() costClicked: EventEmitter<string> = new EventEmitter();

    onCostSelect():void{
        this.costClicked.emit(this.costType)
    }
}