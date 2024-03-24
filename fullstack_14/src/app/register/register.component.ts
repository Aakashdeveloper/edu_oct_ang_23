import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IRegister } from './register.model';
import { RegisterService } from './register.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService:RegisterService,
              private router:Router) { }
  
  myEmployee = new IRegister('Rajeev','rajeev@gmail','12345678','9876543211')


  ngOnInit(): void {
  }

  submitForm(Form:NgForm):void{
    console.log(Form.value)
    this.registerService.registerEmp(Form.value)
      .subscribe((res:any[]) => {console.log(`Data Posted `,res)})
    this.router.navigate(['/login'])
  }

}
