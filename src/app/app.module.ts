import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { routing } from './app.routing';
import { AppComponent } from './core/containers';
import { CoreModule } from './core/core.module';
import { reducers, metaReducers } from './reducers';
import { PagesEffects } from './core/effects/pages';
import { AppConfigDev } from './shared/configs/appConfig.dev';
import { HttpService } from './shared/services/http.service';

const APP_PROVIDERS = [
  HttpService
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    NgbModule.forRoot(),
    CoreModule.forRoot(),
    routing,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([PagesEffects]),
  ],
  providers: [
    APP_PROVIDERS,
    { provide: 'IAppConfig', useClass: AppConfigDev }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
