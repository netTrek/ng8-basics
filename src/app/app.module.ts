import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BindingSamplesModule } from './binding-samples/binding-samples.module';
import { UtilsModule } from './utils/utils.module';
import { DirectiveSamplesModule } from './directive-samples/directive-samples.module';
import { PipeSamplesModule } from './pipe-samples/pipe-samples.module';

import localeDE from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

registerLocaleData ( localeDE );

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BindingSamplesModule,
    UtilsModule,
    DirectiveSamplesModule,
    PipeSamplesModule
  ],
  providers   : [
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap   : [AppComponent]
})
export class AppModule { }
