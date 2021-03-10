import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home/home.component';
import { ListComponent } from './components/user/list/list.component';
import { AddEditComponent } from './components/user/add-edit/add-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'users', component: ListComponent},
  {path: 'users/add', component: AddEditComponent},
  {path: 'users/edit/:userId', component: AddEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
