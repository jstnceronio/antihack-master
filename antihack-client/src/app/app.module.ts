import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObMasterLayoutModule, ObButtonModule, ObIconModule, ObMasterLayoutConfig, multiTranslateLoader, ObHttpApiInterceptor, ObExternalLinkModule } from '@oblique/oblique';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

registerLocaleData(localeDECH);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ObMasterLayoutModule,
    BrowserAnimationsModule,
    ObButtonModule, // add other Oblique modules as needed
    ObIconModule.forRoot(), HttpClientModule, TranslateModule.forRoot(multiTranslateLoader()), MatButtonModule, MatCardModule, MatIconModule, ObExternalLinkModule
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
