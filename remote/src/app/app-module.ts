import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Search } from './components/search/search';
import { Home } from './components/home/home';
import {SharedModule} from './shared/shared.module';
import {IonicModule} from '@ionic/angular';
import { HistoryPage } from './components/history-page/history-page';
import { StartPage } from './components/start-page/start-page';
import { ProfilePage } from './components/profile-page/profile-page';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    IonicModule.forRoot()
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
