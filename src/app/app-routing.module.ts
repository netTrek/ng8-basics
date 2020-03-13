import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserContractsComponent } from './user/user-detail/user-contracts/user-contracts.component';
import { UserEditComponent } from './user/user-detail/user-edit/user-edit.component';
import { UserDetailResolveService } from './user/user-detail/user-detail-resolve.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  {
    path    : 'user/:id', component: UserDetailComponent,
    resolve : { user: UserDetailResolveService },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'contracts' },
      { path: 'contracts', component: UserContractsComponent },
      { path: 'edit', component: UserEditComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule ( {
  imports: [RouterModule.forRoot ( routes, { /* useHash: true *//*,enableTracing: true*/ } )],
  exports: [RouterModule]
} )
export class AppRoutingModule {
}
