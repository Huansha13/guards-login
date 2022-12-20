import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './login/components/sign-in/sign-in.component';
import { NavComponent } from './nav/nav.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

import { GuardsService as guard } from './login/guards.service';
const routes: Routes = [
  // Paso 09: Crear Paht
  {path: '', redirectTo: 'nav', pathMatch: 'prefix'},
  
  { path: 'nav', component: NavComponent},
  { path: 'login', component: SignInComponent},
  { path: 'menu',  canActivate: [guard], component: MenuPrincipalComponent},

  { path: '**', redirectTo:'nav'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
