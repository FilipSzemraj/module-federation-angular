import {
  APP_INITIALIZER,
  inject,
  NgModule,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import {initializeRoutes} from './utils/route-initializer';
import {Router} from '@angular/router';
import {CustomManifest} from './utils/config';
import {buildRoutes} from './utils/routes';
import {getManifest} from '@angular-architects/module-federation';

@NgModule({
  declarations: [
    App,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAppInitializer(() => initializeRoutes())
    // provideAppInitializer(() => {
    //   const router = inject(Router);
    //
    //   return new Promise<void>((resolve) => {
    //     const manifest = getManifest<CustomManifest>();
    //     const routes = buildRoutes(manifest);
    //     router.resetConfig(routes);
    //     resolve();
    //   });
    //   //initializeRoutes()
    // })
  ],
  bootstrap: [App]
})
export class AppModule { }
