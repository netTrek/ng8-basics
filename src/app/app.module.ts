import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BindingSampleModule } from './binding-sample/binding-sample.module';
import { UtilsModule } from './utils/utils.module';
import { DirectiveSampleModule } from './directive-sample/directive-sample.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BindingSampleModule,
    UtilsModule,
    DirectiveSampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
