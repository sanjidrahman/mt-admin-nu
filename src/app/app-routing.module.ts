import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { appGuard, appGuard2 } from './guards/app.guard';

const routes: Routes = [
  { path: '', title: 'Login Page', component: LoginComponent, canActivate: [appGuard2] },
  { path: 'login', redirectTo: '', pathMatch: 'full' },
  {
    path: 'nav', title: 'Nav', component: NavComponent, children: [
      {
        path: 'dashboard', title: 'Dashboard', component: DashboardComponent, canActivate: [appGuard]
      },
      {
        path: 'users', title: 'Users', component: UsersComponent, canActivate: [appGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
