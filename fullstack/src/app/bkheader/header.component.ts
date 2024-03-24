import { Component } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css',]
})

export class HeaderComponent{
    title = 'Angular App Code Development';
    imgUrl ='https://b.zmtcdn.com/data/pictures/4/307374/b2b03be3aba61b0f173aa23e1abdb42b.jpg'
    
    handleClick(){
        console.log('Button Clicked')
    }
}