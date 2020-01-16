import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BindingSampleModule } from './binding-sample/binding-sample.module';
import { UtilsModule } from './utils/utils.module';
import { ContentSamplesModule } from './content-samples/content-samples.module';

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
    ContentSamplesModule
    // weil ng new  mit --routing
  ],
  providers: [], // Registreiren von Elementen in den Injector
  bootstrap: [AppComponent] // mit welcher Komponente soll in der index.html begonnen werden.
})
export class AppModule { }
