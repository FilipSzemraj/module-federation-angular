import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HistoryPageRoutingModule} from './history-routing.module';
import {HistoryPage} from '../components/history-page/history-page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HistoryPageRoutingModule,
    ],
  declarations: [HistoryPage],
})
export class HistoryPageModule {}
