import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'MyCustomePipe'
})

export class MyUpperPipe implements PipeTransform {
    transform(value:string,typeOf:string):string {
        if(typeOf == 'Upper'){
            value = value.toUpperCase()
        }else{
            value = value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
        }
        
        return value
    }
}