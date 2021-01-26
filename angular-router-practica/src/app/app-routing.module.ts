import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
import {AuthGuard} from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';



const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'servers-center',
    loadChildren: () => import('./servers-center/server-center.module').then(m => m.ServerCenterModule),
    data: { preload: true }
  },
  { path: '',   redirectTo: '/superusuarios', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
