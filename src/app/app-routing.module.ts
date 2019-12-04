import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CountdownComponent } from './utils/countdown/countdown.component';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'user', component: UserComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home'} // immer am ende
];

@NgModule ( {
  imports: [ RouterModule.forRoot ( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
