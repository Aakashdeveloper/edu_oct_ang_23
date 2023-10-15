import { Component, OnInit } from '@angular/core';
import { UserService } from './userList.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  userList:any[] = []

  ngOnInit(): void {
    this.userService.userList()
      .subscribe((res:any[]) => this.userList = res)
  }

   logoutUser():void{
    localStorage.removeItem('Token_Number');
    localStorage.removeItem('Role_Type');
    this.router.navigate(['/login'])
  }

}
