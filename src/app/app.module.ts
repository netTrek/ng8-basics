import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { DeleteMeComponent } from './delete-me/delete-me.component';
import { UtilsModule } from './utils/utils.module';
import { DirectiveSamplesModule } from './directive-samples/directive-samples.module';
import { PipeSamplesModule } from './pipe-samples/pipe-samples.module';

import localeData from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { RxjsSampleModule } from './rxjs-sample/rxjs-sample.module';

registerLocaleData( localeData );

@NgModule({
  declarations: [
    AppComponent,
    DeleteMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    UtilsModule,
    DirectiveSamplesModule,
    PipeSamplesModule,
    RxjsSampleModule
  ],
  providers: [
    { useValue: 'de', provide: LOCALE_ID }
    // AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
