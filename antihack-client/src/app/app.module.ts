import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {
	ObButtonModule,
	ObColumnLayoutModule,
	ObExternalLinkModule,
	ObHttpApiInterceptor,
	ObIconModule,
	ObMasterLayoutConfig,
	ObMasterLayoutModule,
	ObSearchBoxModule,
	multiTranslateLoader
} from '@oblique/oblique';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {RouterTestingModule} from '@angular/router/testing';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ListComponent} from './list/list.component';
import {AppRoutingModule} from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {MatSelectModule} from "@angular/material/select";

registerLocaleData(localeDECH);

@NgModule({
	declarations: [AppComponent, LoginComponent, RegisterComponent, ListComponent],
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
		ObSearchBoxModule,
		MatFormFieldModule,
		MatTableModule,
		MatInputModule,
		ObButtonModule,
		ReactiveFormsModule,
		ObColumnLayoutModule,
		MatCardModule,
		MatIconModule,
		ObExternalLinkModule,
		RouterModule,
		AppRoutingModule,
		Ng2SearchPipeModule,
		FormsModule,
		MatSelectModule
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
