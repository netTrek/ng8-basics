import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [ // alle im Temp. verwendeten Elemente müssen für den Kompiler registriert werden!
    AppComponent
  ],
  imports: [ // abh. Module importieren
    BrowserModule,
    AppRoutingModule,
    UserModule
    // weil ng new  mit --routing
  ],
  providers: [], // Registreiren von Elementen in den Injector
  bootstrap: [AppComponent] // mit welcher Komponente soll in der index.html begonnen werden.
})
export class AppModule { }
