import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {reducerMap} from "./common/store/reducer-map";
import {metaReducers} from "./common/store/meta-reducer";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      paramsInheritanceStrategy: 'always'
    }),
    StoreModule.forRoot(reducerMap as any, {metaReducers: metaReducers as any}),
    StoreRouterConnectingModule.forRoot({
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
