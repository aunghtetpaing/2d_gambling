import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordSettingPageRoutingModule } from './password-setting-routing.module';

import { PasswordSettingPage } from './password-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordSettingPageRoutingModule
  ],
  declarations: [PasswordSettingPage]
})
export class PasswordSettingPageModule {}
