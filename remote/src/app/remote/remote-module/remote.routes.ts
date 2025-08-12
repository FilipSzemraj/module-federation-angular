import {Routes} from "@angular/router";
import {Search} from '../../components/search/search';
import {Home} from '../../components/home/home';
import {HistoryPageModule} from '../../modules/history.module';
import {StartPageModule} from '../../modules/start.module';
import {ProfilePageModule} from '../../modules/profile.module';

export const REMOTE_ROUTES: Routes = [
  {
    path: '',
    component: Search,
    children: [
      {
        path: 'history',
        loadChildren: () => {
          console.log("routing na history z wnętrza remote")
          return Promise.resolve(HistoryPageModule)
        }, // eager loading
        //loadChildren: () => import('../history/history.module').then((m) => m.HistoryPageModule),
        //loadChildren: () => HistoryPageModule,
        // import('../history/history.module').then((m) => m.HistoryPageModule),
        //component: HistoryPageModule,
      },
      {
        path: 'start',
        loadChildren: () => {
          console.log("routing na history z wnętrza remote")
          return Promise.resolve(StartPageModule)
        },
        //loadChildren: () => import('../start/start.module').then((m) => m.StartPageModule),
        // import('../start/start.module').then((m) => m.StartPageModule),
        //component: StartPageModule,
      },
      {
        path: 'profile',
        loadChildren: () => {
          console.log("routing na history z wnętrza remote")
          return Promise.resolve(ProfilePageModule)
        },
        //loadChildren: () => import('../profile/profile.module').then((m) => m.ProfilePageModule),
        // import('../profile/profile.module').then((m) => m.ProfilePageModule),
        //component: ProfilePageModule,
      },
      {
        path:'',
        redirectTo: 'search/start',
        pathMatch: 'full'
      }
    ],
  },
  {
    path:'remote-home',
    component: Home
  }
]
