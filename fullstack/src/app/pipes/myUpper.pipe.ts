import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'MyCustomePipe'
})

// function toTitle(str){
//     return str.replace(/\b\w/g,(txt)=>{
//         return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase()

//     })
// }

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