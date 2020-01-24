import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CountdownComponent } from './utils/countdown/countdown.component';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'cd', component: CountdownComponent },
  { path: 'pipes', component: PipeSampleComponent },
  // ng g m dash --module app --routing --route dash
  { path: 'dash', loadChildren: () => import('./dash/dash.module').then ( m => m.DashModule ) },
  { path: 'rxjs', loadChildren: () => import('./rxjs-sample/rxjs-sample.module').then ( m => m.RxjsSampleModule ) },
  { path: '**', component: /*404Comp*/ UserComponent }
];

@NgModule( {
  imports: [RouterModule.forRoot ( routes, { useHash: false } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
