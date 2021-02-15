import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User, GenderType } from '../../services/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.css']
})
export class UserAddEditComponent implements OnInit {
  public addEditForm: FormGroup;
  public userId: number;
  public title: string;
  public usr: User;
  public genderTypes : Array<any> = [
    {name : GenderType.Femenino, value : GenderType.Femenino},
    {name : GenderType.Masculino, value : GenderType.Masculino}
  ];

  constructor(
    private _formBuilder: FormBuilder, 
    private _route: ActivatedRoute,
    private _userService: UserService
  ) { 
    
  }

  ngOnInit(): void {
    this.userId = this._route.snapshot.params['userId'];
    this.title = (this.userId) ? "Modificar Usuario" : "Nuevo Usuario";

    this.addEditForm = this._formBuilder.group({
      userId: [''],
      user: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      lastNameMother: ['', Validators.required], 
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      isActive: ['', Validators.required]
    });

    this._userService.getUser(this.userId).subscribe(
      data => {
        this.usr = data;
        this.addEditForm.setValue(data);
        console.log(this.usr);
        
      },
      error => {
        console.log(error);
        
      }
    );
  }

  save(){

  }

}
