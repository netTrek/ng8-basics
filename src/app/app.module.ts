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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppAuthInterceptorService } from './app-auth-interceptor.service';
import { AppErrorInterceptorService } from './app-error-interceptor.service';
import { HomeModule } from './home/home.module';

registerLocaleData ( localeDE );

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule,
    BindingSamplesModule,
    UtilsModule,
    DirectiveSamplesModule,
    PipeSamplesModule,
    HomeModule
  ],
  providers   : [
    { provide: LOCALE_ID, useValue: 'de' },
    { provide: HTTP_INTERCEPTORS, useClass: AppAuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AppErrorInterceptorService, multi: true }
  ],
  bootstrap   : [AppComponent]
})
export class AppModule { }
