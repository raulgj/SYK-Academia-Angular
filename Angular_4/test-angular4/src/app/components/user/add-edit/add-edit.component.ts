import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/interface/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  public addEditForm: FormGroup;
  public userId: number;
  public title: string;
  //public genderTypes : Array<any> = Global.genderTypes;
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
      userId: [this.userId],
      user: [usr.user, Validators.required],
      //password: [usr.password, Validators.required],
      //name: [usr.name, Validators.required],
      //lastName: [usr.lastName, Validators.required],
      //lastNameMother: [usr.lastNameMother, Validators.required], 
      //birthdate: [usr.birthdate, Validators.required],
      //gender: [usr.gender, Validators.required],
      //isActive: [usr.isActive, Validators.required], 
      //temails: this._formBuilder.array(this.createFormEmail(usr.temails))
    });

  }

  ngOnInit(): void {
    /*
    if (this.userId) {
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
    }
    */
  }

  private createFormUser(usr : IUser){
    this.addEditForm = this._formBuilder.group({
      userId: [usr.userId],
      user: [usr.user, Validators.required],
      //password: [usr.password, Validators.required],
      //name: [usr.name, Validators.required],
      //lastName: [usr.lastName, Validators.required],
      //lastNameMother: [usr.lastNameMother, Validators.required], 
      //birthdate: [usr.birthdate, Validators.required],
      //gender: [usr.gender, Validators.required],
      //isActive: [usr.isActive, Validators.required], 
      //temails: this._formBuilder.array(this.createFormEmail(usr.temails))
    });
  }

  createFormEmail(emails: any[]) {
    return emails.map(email => this._formBuilder.group({
      emailId: [email.emailId],
      email: [email.email, Validators.required],
      isActive: [email.isActive, Validators.required]
    }));
  }


  getEmailsFor() {
    return (<FormArray>this.addEditForm.get('temails')).controls
  }

}
