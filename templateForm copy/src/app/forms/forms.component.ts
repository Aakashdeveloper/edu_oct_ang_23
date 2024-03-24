import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from './forms.model';
import { FormService } from './forms.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private formService:FormService,
              private router:Router) { }
  
  language:string[] = ["Node","React","Angular","JavaScript"]
  myEmployee = new IUser('','','','','')
  hasCodeLangError:boolean = false;


  ngOnInit(): void {
  }

  firstToUpper(value:string):void{
    if(value.length>0){
      value = value.trim();
      this.myEmployee.firstName = value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
    }else{
      this.myEmployee.firstName = value
    }
  }

  showPassword(event:Event):void{
    console.log((event.target as HTMLInputElement).type)
    let inputType = (event.target as HTMLInputElement).type
    if(inputType === "password"){
      (event.target as HTMLInputElement).type = "text"
    }else{
      (event.target as HTMLInputElement).type = "password"
    }
  }

  validateCodeLang():void{
    if(this.myEmployee.clang === 'default'){
        this.hasCodeLangError = true
    }else{
      this.hasCodeLangError = false
    }
  }

  submitForm(Form:NgForm):void{
    console.log(Form.value)
    this.formService.postEmp(Form.value)
      .subscribe((res:any[]) => {console.log(`Data Posted `,res)})
    this.router.navigate(['/after'])
  }

}
