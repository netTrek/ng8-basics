import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RxjsSampleComponent } from './rxjs-sample/rxjs-sample.component';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import { HomeComponent } from './home/home.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent, children: [
      {path: 'edit/:id', component: UserEditComponent}
    ] },
  { path: 'rxjs', component: RxjsSampleComponent },
  { path: 'pipes', component: PipeSampleComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
