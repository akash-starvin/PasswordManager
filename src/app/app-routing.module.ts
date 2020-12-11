import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { NavigationMenuComponent } from './modules/navigation-menu/navigation-menu.component';
import { PopUpComponent } from './modules/pop-up/pop-up.component'
const routes: Routes = [
  {
    path: '',
    //component: SitePopupComponent
    component: SignInComponent
    //component: NavigationMenuComponent
  },
  {
    path: 'signIn',
    component: SignInComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'navigationMenu',
    component: NavigationMenuComponent
  }
  ,
  {
    path: 'popUp',
    component: PopUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
