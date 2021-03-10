import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser, GenderType, IEmails } from '../../services/iUser';
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
  public genderTypes : Array<any> = Global.genderTypes;
  public user = {} as IUser;

  constructor(
    private _formBuilder: FormBuilder, 
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) { 
    this.userId = this._route.snapshot.params['userId'];
    this.title = (this.userId) ? "Modificar Usuario" : "Nuevo Usuario";
    this.addEditForm = this._formBuilder.group({
      userId: [user.userId],
      user: [user.user, Validators.required],
      password: [user.password, Validators.required],
      name: [user.name, Validators.required],
      lastName: [user.lastName, Validators.required],
      lastNameMother: [user.lastNameMother, Validators.required], 
      birthdate: [user.birthdate, Validators.required],
      gender: [user.gender, Validators.required],
      isActive: [user.isActive, Validators.required], 
      temails: this._formBuilder.array(this.createFormEmail(user.temails))
    });
  }

  ngOnInit(): void {
    /*if (this.userId) {
      this._userService.getUser(this.userId).subscribe(
        data => {
          this.createFormUser(data);
        },
        error => {
          console.log(error);
        }
      );
    }
    else {
      this.createFormUser(this.user);
    }*/
  }

  private createFormUser(usr : IUser){
    this.addEditForm = this._formBuilder.group({
      userId: [usr.userId],
      user: [usr.user, Validators.required],
      password: [usr.password, Validators.required],
      name: [usr.name, Validators.required],
      lastName: [usr.lastName, Validators.required],
      lastNameMother: [usr.lastNameMother, Validators.required], 
      birthdate: [usr.birthdate, Validators.required],
      gender: [usr.gender, Validators.required],
      isActive: [usr.isActive, Validators.required], 
      temails: this._formBuilder.array(this.createFormEmail(usr.temails))
    });
  }

  createFormEmail(emails: any[]) {
    return emails.map(email => this._formBuilder.group({
      emailId: [email.emailId],
      email: [email.email, Validators.required],
      isActive: [email.isActive, Validators.required]
    }));

    /*const formEmails = this._formBuilder.group({
      emailId: [emails.emailId],
      email: [emails.email, Validators.required],
      isActive: [emails.isActive, Validators.required]
    });

    return formEmails;*/
  }


  getEmailsFor() {
    return (<FormArray>this.addEditForm.get('temails')).controls

    /*
    return (
              <FormArray>(
                          <FormArray>(
                                      <FormArray>this.addEditForm.get('tasks')
                                    ).controls[taskIndex].get('groups')
                          ).controls[groupIndex].get('attributes')
            ).controls;
    */
  }
}
