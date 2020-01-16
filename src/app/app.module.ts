import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BindingSampleModule } from './binding-sample/binding-sample.module';
import { UtilsModule } from './utils/utils.module';
import { ContentSamplesModule } from './content-samples/content-samples.module';
import { PipeSampleModule } from './pipe-sample/pipe-sample.module';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { RxjsSampleModule } from './rxjs-sample/rxjs-sample.module';

registerLocaleData( localeDe ); // registrieren weiterer sprachen

@NgModule({
  declarations: [ // alle im Temp. verwendeten Elemente müssen für den Kompiler registriert werden!
    AppComponent
  ],
  imports: [ // abh. Module importieren
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BindingSampleModule,
    UtilsModule,
    ContentSamplesModule,
    PipeSampleModule,
    RxjsSampleModule
    // weil ng new  mit --routing
  ],
  providers: [
    { useValue: 'de', provide: LOCALE_ID } // def. lang definieren.
  ], // Registreiren von Elementen in den Injector
  bootstrap: [AppComponent] // mit welcher Komponente soll in der index.html begonnen werden.
})
export class AppModule { }
