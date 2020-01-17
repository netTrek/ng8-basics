import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RxjsSampleComponent } from './rxjs-sample/rxjs-sample.component';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import { HomeComponent } from './home/home.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserAcrivateGuard } from './user/user-acrivate.guard';
import { UserActivateGuard } from './user/user-activate.guard';
import { UserEditResolveService } from './user/user-edit/user-edit-resolve.service';
import { ModalAComponent } from './modal-comps/modal-a/modal-a.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'modalA',
    component: ModalAComponent,
    outlet: 'modal' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent,
    canActivate: [
      UserActivateGuard,
      UserAcrivateGuard
    ],
    children: [
      { path: 'edit/:id', component: UserEditComponent,
        resolve: {
          user: UserEditResolveService
        }
      }
    ] },
  { path: 'rxjs', component: RxjsSampleComponent },
  { path: 'pipes', component: PipeSampleComponent },
  { path: 'dash',
    loadChildren: () => import('./dash/dash.module')
      .then(m => m.DashModule) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
