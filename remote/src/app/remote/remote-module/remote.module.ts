import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {REMOTE_ROUTES} from './remote.routes';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(REMOTE_ROUTES)
  ]
})
export class RemoteModule { }
