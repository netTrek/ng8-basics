import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule ( {
  imports: [RouterModule.forRoot ( routes, { /* useHash: true *//*,enableTracing: true*/ } )],
  exports: [RouterModule]
} )
export class AppRoutingModule {
}
