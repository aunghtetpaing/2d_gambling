import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// Import Native Modules 
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Contact, Contacts } from '@ionic-native/contacts/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { userReducers } from './store/reducers/user.reducers';
import { AccountSettingMenuComponent } from './components/account-setting-menu/account-setting-menu.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AccountSettingMenuComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    StoreModule.forRoot({
      user: userReducers
    }),
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeStorage,
    Contact,
    Contacts
  ],
  exports: [
    AccountSettingMenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
