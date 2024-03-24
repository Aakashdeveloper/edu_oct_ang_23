import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'MyCustomePipe'
})

export class MyUpperPipe implements PipeTransform{

    transform(value:string,param1:String):string {
        console.log(param1)
        if(param1 == 'Upper'){
            value = value.toUpperCase()
        }else{
            value = value.toLowerCase()
        }
       

        return value
    }
}