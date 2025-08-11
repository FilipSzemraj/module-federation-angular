import { NgModule } from '@angular/core';
import {Search} from '../components/search/search';
import { CommonModule } from '@angular/common';
import {Home} from '../components/home/home';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    Search,
    Home
  ],
    imports: [
        CommonModule,
        RouterLink
    ],
  exports:[
    Home,
    Search,
    CommonModule
  ],
})
export class SharedModule { }
