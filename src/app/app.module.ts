import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { routing } from './app.routing';
import { AppComponent } from './core/containers';
import { CoreModule } from './core/core.module';
import { reducers, metaReducers } from './reducers';
import { PagesEffects } from './core/effects/pages';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    NgbModule.forRoot(),
    CoreModule.forRoot(),
    routing,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([PagesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
