import {OB_PROJECT_INFO} from '@oblique/oblique';
import packageInfo from '../package.json';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
{provide: OB_PROJECT_INFO, useValue: {name: packageInfo.name, version: packageInfo.version, title: packageInfo.title}}
]).bootstrapModule(AppModule)
  .catch(err => console.error(err));
