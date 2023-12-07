import {Routes} from '@angular/router';
import {AuthPageComponent} from "./auth-page/auth-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {SignInComponent} from "./auth-page/sign-in/sign-in.component";
import {AuthGuardService} from "./service/auth-guard.service";
import {UserListComponent} from "./user-list/user-list.component";
import {AdminGuardService} from "./service/admin-guard.service";
import {NewsPageComponent} from "./news-page/news-page.component";

export const routes: Routes = [
  {path: '', component: NewsPageComponent},
  {path: 'sign-up', component: AuthPageComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'posts', component: MainPageComponent, canActivate: [AuthGuardService]},
  {path: 'users', component: UserListComponent, canActivate: [AdminGuardService]}
];
