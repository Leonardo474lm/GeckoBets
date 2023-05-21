import { RouterModule, Routes } from "@angular/router";
import { Component, NgModule } from "@angular/core";
import { MenuComponent } from "./components/menu/menu.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'login',

    
    component: LoginComponent,

  },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
