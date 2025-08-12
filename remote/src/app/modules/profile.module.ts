import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Tab3PageRoutingModule} from './profile-routing.module';
import {ProfilePage} from '../components/profile-page/profile-page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    Tab3PageRoutingModule,
  ],
  declarations: [ProfilePage],
})
export class ProfilePageModule {}
