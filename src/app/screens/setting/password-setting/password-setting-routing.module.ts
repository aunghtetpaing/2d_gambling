import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordSettingPage } from './password-setting.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordSettingPageRoutingModule {}
