import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IEmails, IUser, GenderType } from 'src/app/interface/iuser';
import { UserService } from 'src/app/services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  public formUserInfo: FormGroup;
  public userId: number;
  public title: string;
  public user: Observable<IUser>;
  public userDate: Date;

  constructor(
    private _formBuilder: FormBuilder, 
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) { 
    this.userId = this._route.snapshot.params['userId'];
    this.title = (this.userId) ? "Modificar Usuario" : "Nuevo Usuario";

    this.formUserInfo = this._formBuilder.group({
      userId:         [-1],
      user:           ['',                    Validators.required],
      password:       ['',                    Validators.required],
      name:           ['',                    Validators.required],
      lastName:       ['',                    Validators.required],
      lastNameMother: ['',                    Validators.required], 
      birthdate:      [new Date(),            Validators.required]/*,
      gender:         [GenderType.Masculino,  Validators.required],
      isActive:       ['1',                   Validators.required]*/
    });
  }

  ngOnInit(): void {
    if (this.userId) {
      this.userDate = moment("1986-12-31", "YYYY-MM-DD").toDate();


      this.user = this._userService.getUser(this.userId).pipe(
        //tap(user => this.formUserInfo.patchValue(user))
        
        tap(user => this.formUserInfo.patchValue({
          "userId":user.userId, 
          "lastName":user.lastName, 
          "lastNameMother":"Jasso",
          "name": user.name,
          "password":"r00t1234",
          "user":"raulgj1",
          "birthdate": this.userDate
          }))
      );
      /*this._userService.getUser(this.userId).subscribe(
        data => {
          this.user = data;
          this.formUserInfo.patchValue({
            "userId":14,
            "lastName":"Gomez",
            "lastNameMother":"Jasso",
            "name":"Raul Angel",
            "password":"r00t1234",
            "user":"raulgj1",
            });
        },
        error => {
          console.log(error);
        }
      );*/
    }
    else{
      //this.user.
    }
  }
}
