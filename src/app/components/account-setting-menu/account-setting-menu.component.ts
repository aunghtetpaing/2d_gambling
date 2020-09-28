import { Component, OnInit } from '@angular/core';

const accountSetting = [
  {
    id: 1,
    name: 'Profile',
    icon: 'person-circle-outline',
    route: 'profile-setting'
  },
  {
    id: 2,
    name: 'Password',
    icon: 'lock-closed-outline',
    route: 'password-setting'
  }
]
@Component({
  selector: 'app-account-setting-menu',
  templateUrl: './account-setting-menu.component.html',
  styleUrls: ['./account-setting-menu.component.scss'],
})


export class AccountSettingMenuComponent implements OnInit {

  settingMenu: any[] = accountSetting;
  selectedIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
