import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { reducer } from "./store/reducer";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {SharedSearchPanelModule} from "./modules/shared/shared-search-panel/shared-search-panel.module";
import {SharedDropDownChipsModule} from "./modules/shared/shared-drop-down-chips/directive/sticky-drop-down-menu.directive/shared-drop-down-chips.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(reducer),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        SharedSearchPanelModule,
        SharedDropDownChipsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
