import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser, GenderType, IEmails } from '../../services/iUser';
import { User } from '../../services/user';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {Global} from '../../common/global';
import * as moment from 'moment';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.css']
})
export class UserAddEditComponent implements OnInit {
  public addEditForm: FormGroup;
  public userId: number;
  public title: string;
  public user: User = new User;
  public genderTypes : Array<any> = Global.genderTypes;

  constructor(
    private _formBuilder: FormBuilder, 
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) { 
    this.addEditForm = this._formBuilder.group({
      userId: [-1],
      user: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      lastNameMother: ['', Validators.required], 
      birthdate: [new Date(), Validators.required],
      gender: ['', Validators.required],
      isActive: [true, Validators.required], 
      temails: this._formBuilder.array([
        this._formBuilder.group({
          emailId: [-1],
          email: ['', Validators.required],
          isActive: [true, Validators.required]
        })
      ])
    });

    this.userId = this._route.snapshot.params['userId'];
    this.title = (this.userId) ? "Modificar Usuario" : "Nuevo Usuario";
  }

  ngOnInit(): void {
    if (this.userId){
      this._userService.getUser(this.userId).subscribe(
        data => {
          var test = this.user.getUserToJS(data);
          this.addEditForm.setValue(test);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  save(){
    if (this.userId >= 1){
      this._userService.updateUser(this.userId, this.addEditForm.value).subscribe(
        data => {
            this._router.navigate(['users']);
        },
        error => {
          alert("Ocurrio un error, intentalo mas tarde")
          console.log(error);
        }
      );
    }
    else{
      this._userService.saveUser(this.addEditForm.value).subscribe(
        data => {
            this._router.navigate(['users']);
        },
        error => {
          alert("Ocurrio un error, intentalo mas tarde")
          console.log(error);
        }
      );
    }
  }

}
