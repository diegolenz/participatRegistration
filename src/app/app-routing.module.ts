import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const appRoutes: Routes = [
  {
    path: 'participant',
    loadChildren: () => import('./modules/participant/participant.module').then(m => m.ParticipantModule)
  },
/*   {
    path: '/dashboard',
    redirectTo: 'dashboard',
    //component: DashboardComponent,
    pathMatch: 'full',
  } */
/*   {
    path: '/dashboard'
    //,
    //component: DashboardComponent
  } */
  /* ,
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthManager],
    children: [{
      path: '',
      loadChildren: 'common/components/modules/dashboard/dashboard.module#DashboardModule'
    }]
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
