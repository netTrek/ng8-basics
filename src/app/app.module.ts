import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { DeleteMeComponent } from './delete-me/delete-me.component';
import { UtilsModule } from './utils/utils.module';
import { DirectiveSamplesModule } from './directive-samples/directive-samples.module';

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
    DirectiveSamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
