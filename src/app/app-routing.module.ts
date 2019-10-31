import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './helpers/auth.guard';
import { BeerListComponent } from './beer-list/beer-list.component';

const routes: Routes = [
  {path:"", component: HomeComponent, canActivate: [AuthGuard]},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"userProfile", component: UserProfileComponent},
  {path:"beerList", component: BeerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
