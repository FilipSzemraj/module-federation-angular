import { IonicModule } from '@ionic/angular';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {StartPage} from '../components/start-page/start-page';
import {NgModule} from '@angular/core';
import {StartPageRoutingModule} from './start-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    StartPageRoutingModule
  ],
  declarations: [
    StartPage,
  ],
})
export class StartPageModule {}
