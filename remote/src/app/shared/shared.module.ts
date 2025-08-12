import { NgModule } from '@angular/core';
import {Search} from '../components/search/search';
import { CommonModule } from '@angular/common';
import {Home} from '../components/home/home';
import {RouterLink} from "@angular/router";
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [
    Search,
    Home
  ],
  imports: [
    CommonModule,
    RouterLink,
    IonicModule
  ],
  exports:[
    Home,
    Search,
    CommonModule
  ],
})
export class SharedModule { }
