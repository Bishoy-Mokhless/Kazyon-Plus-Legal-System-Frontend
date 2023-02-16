import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './auth.guard';
import { Case1Component } from './case1/case1.component';
import { Case2Component } from './case2/case2.component';
import { Case3Component } from './case3/case3.component';
import { LawsuitComponent } from './lawsuit/lawsuit.component';
import { ProcurationComponent } from './procuration/procuration.component';
import { Procuration1Component } from './procuration1/procuration1.component';
import { Procuration3Component } from './procuration3/procuration3.component';
import { SessionComponent } from './session/session.component';
import { IndexComponent } from './contracts/index/index.component';
const routes: Routes = [
  {
    path: 'contracts',
    loadChildren: () => import('./contracts/contracts.module').then(m => m.ContractsModule),
    canActivate:[AuthGuard]
  },
  {path:'error', component:ErrorPageComponent},
  {path:'home', component:IndexComponent},
  {path:'lawsuit', component:LawsuitComponent},
  {path:'case',component:Case1Component},
  {path:'procuration',component:ProcurationComponent },
  {path:'procuration1',component:Procuration1Component },
  {path:'case2',component:Case2Component },
  {path:'case3/:id',component:Case3Component },
  {path:'procuration2/:id',component:Procuration3Component},
  {path:'session/:id',component:SessionComponent },
  {path: '**',component:LoginComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
