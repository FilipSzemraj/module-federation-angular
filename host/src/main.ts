import { initFederation, loadManifest } from '@angular-architects/module-federation';

/*
initFederation('./assets/mf.manifest.json')
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
*/


loadManifest("./assets/mf.manifest.json")
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));


/* Kiedy nie używamy manifestu
Promise.all([
  loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:4201/remoteEntry.js' }),
  loadRemoteEntry({ type: 'module', remoteEntry: 'http://localhost:4202/remoteEntry.js' })
])
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));*/

/* albo po prostu tak i później w routingu:

import('./bootstrap')
  .catch(err=> console.error(err));

  //routing
{
     path: 'flights',
     loadChildren: () =>
         loadRemoteModule({
             type: 'module',
             remoteEntry: 'http://localhost:4201/remoteEntry.js',
             exposedModule: './Module',
         }).then((m) => m.FlightsModule),
 },
*/
