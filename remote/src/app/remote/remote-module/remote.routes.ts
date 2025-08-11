import {Routes} from "@angular/router";
import {Search} from '../../components/search/search';
import {Home} from '../../components/home/home';

export const REMOTE_ROUTES: Routes = [
  {
    path: '',
    component: Search
  },
  {
    path:'remote-home',
    component: Home
  }
]
