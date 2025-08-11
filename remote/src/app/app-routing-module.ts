import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Search} from './components/search/search';
import {Home} from './components/home/home';

const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full'
  },
  {
    path:'search',
    component: Search,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
