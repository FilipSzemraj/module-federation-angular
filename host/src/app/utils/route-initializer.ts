import { Router } from '@angular/router';
import { getManifest } from '@angular-architects/module-federation';
import { inject } from '@angular/core';
import {buildRoutes} from './routes';
import {CustomManifest} from './config';

export function initializeRoutes(): Promise<void> {
  const router = inject(Router);

  return new Promise<void>((resolve) => {
    const manifest = getManifest<CustomManifest>();
    const routes = buildRoutes(manifest);
    router.resetConfig(routes);
    resolve();
  });
}
