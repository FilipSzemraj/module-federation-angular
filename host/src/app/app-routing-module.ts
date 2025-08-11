import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import {Home} from './components/home/home';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: Home,
  // },
/*  {
    path: 'search',
    // loadChildren: () => import('remote/Module')
    //   .then(m => m.RemoteModule),
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'remote',
      exposedModule: './Module'
    })
      .then(m => m.RemoteModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
