import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { routing } from './app.routing';
import { AppComponent } from './core/containers';
import { CoreModule } from './core/core.module';
import { reducers, metaReducers } from './reducers';
import { PagesEffects } from './core/effects/pages';
import { AppConfigDev } from './shared/configs/appConfig.dev';
import { HttpService } from './shared/services/http.service';
import { environment } from '../environments/environment';
import { CustomRouterStateSerializer } from './shared/states/routerState';

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
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    EffectsModule.forRoot([PagesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    APP_PROVIDERS,
    { provide: 'IAppConfig', useClass: AppConfigDev },
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
