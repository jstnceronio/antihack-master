import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {
	ObButtonModule,
	ObExternalLinkModule,
	ObHttpApiInterceptor,
	ObIconModule,
	ObMasterLayoutConfig,
	ObMasterLayoutModule,
	multiTranslateLoader,
	ObColumnLayoutModule
} from '@oblique/oblique';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {HomeComponent} from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {RouterTestingModule} from '@angular/router/testing';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import {AppRoutingModule} from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RouterModule } from '@angular/router';

registerLocaleData(localeDECH);

@NgModule({
	declarations: [AppComponent, HomeComponent, LoginComponent, RegisterComponent, ListComponent, FormComponent],
	imports: [
		BrowserModule,
		RouterTestingModule,
		ObMasterLayoutModule,
		BrowserAnimationsModule,
		ObButtonModule, // add other Oblique modules as needed
		ObIconModule.forRoot(),
		HttpClientModule,
		TranslateModule.forRoot(multiTranslateLoader()),
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		ObButtonModule,
		ReactiveFormsModule,
		ObColumnLayoutModule,
		MatCardModule,
		MatIconModule,
		ObExternalLinkModule,
		RouterModule,
		AppRoutingModule
	],
	providers: [
		{provide: LOCALE_ID, useValue: 'de-CH'},
		{provide: HTTP_INTERCEPTORS, useClass: ObHttpApiInterceptor, multi: true}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(config: ObMasterLayoutConfig) {
		config.locale.locales = ['de-CH'];
	}
}
