import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfflinePlayComponent } from './offline-play/offline-play.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',loadChildren: ()=> import('./auth/auth.module').then((m)=>m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
