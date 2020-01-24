import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BindingSampleModule } from './binding-sample/binding-sample.module';
import { UtilsModule } from './utils/utils.module';
import { DirectiveSampleModule } from './directive-sample/directive-sample.module';
import { PipeSampleModule } from './pipe-sample/pipe-sample.module';

import localeDeData from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData ( localeDeData );

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BindingSampleModule,
    UtilsModule,
    DirectiveSampleModule,
    PipeSampleModule,
    HttpClientModule
  ],
  providers   : [
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap   : [AppComponent]
})
export class AppModule { }
