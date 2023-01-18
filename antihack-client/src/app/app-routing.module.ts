import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ObUnknownRouteModule} from '@oblique/oblique';
import {LoginComponent} from './login/login.component';
import {ListComponent} from './list/list.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
	{path: '', redirectTo: 'register', pathMatch: 'full'},
	{
		path: 'list',
		component: ListComponent,
		canActivate: [AuthGuardService]
	},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: '**', redirectTo: 'unknown-route'}
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forRoot(routes), ObUnknownRouteModule]
})
export class AppRoutingModule {}
