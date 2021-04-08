import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingController, NavParams } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { DetailedViewPageRoutingModule } from './detailed-view-routing.module';

import { DetailedViewPage } from './detailed-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailedViewPageRoutingModule
  ],
  declarations: [DetailedViewPage]
})
export class DetailedViewPageModule {}
