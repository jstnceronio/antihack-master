import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ObUnknownRouteModule} from '@oblique/oblique';
import {FormComponent} from './form/form.component';
import {LoginComponent} from './login/login.component';
import {ListComponent} from './list/list.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
	{path: '', redirectTo: 'login', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'list', component: ListComponent},
	{path: 'login', component: LoginComponent},
	{path: 'form', component: FormComponent},
	{path: 'register', component: RegisterComponent},
	{path: '**', redirectTo: 'unknown-route'}
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forRoot(routes), ObUnknownRouteModule]
})
export class AppRoutingModule {}
