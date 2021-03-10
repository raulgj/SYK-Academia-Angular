import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interface/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public users: Observable<IUser[]>;

  constructor(
    private _userService: UserService, 
    private _router: Router
  ) { 
    
  }

  ngOnInit(): void {
    this.users = this._userService.getUsers();
  }

  deleteUser(userId : number | undefined){

  }

  editUser(userId: number | undefined){
    this._router.navigate(['users/edit', userId]);
  }

  newUser(){
    this._router.navigate(['users/add']);
  }
}
