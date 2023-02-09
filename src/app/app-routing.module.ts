import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: 'contracts',
    loadChildren: () => import('./contracts/contracts.module').then(m => m.ContractsModule),
    canActivate:[AuthGuard]
  },

  {path: '**',component:LoginComponent},
  {path:'error', component:ErrorPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
