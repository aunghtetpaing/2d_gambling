import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';

import { Store } from '@ngrx/store';
import { UserState } from '../store/state/user.state';
import { EnumActions } from '../store/actions/user.actions';
import { User } from '../_models/user';

import {findUser } from '../_demoData'; 

@Injectable({ providedIn: 'root' })
export class AuthService {

  toast: any;

  constructor(
    private nativeStorageService: NativeStorage,
    private toastCtrl: ToastController,
    private ngrxStore: Store<{ user: UserState}>
  ) { 
    
    this.nativeStorageService.getItem('user').then((result: any) => {
      this.ngrxStore.dispatch({ type: EnumActions.GetUser, payload: result })
    });

  }

  private async authToast(toastMessage: string) {
    const toast = await this.toastCtrl.create({
      header: 'Login Failed',
      message: toastMessage,
      duration: 2000,
      position: 'top'
    });

    return toast.present();
  }

  public async login(phone: string, password: string): Promise<any> {
    const getUser: any = findUser(phone);

    if(!getUser) {
      this.toast = this.authToast('User does not found! please check your phone number');
    }

    if(getUser && getUser.password !== password) {
      this.toast = this.authToast('Incorrect password, Try again.');
    }

    this.nativeStorageService.setItem('user', getUser).then((user: User) => {
      this.ngrxStore.dispatch({ type: EnumActions.GetUser, payload: user });
    });
 
    return getUser;
  }

  public async logOut(): Promise<any> {
    await this.nativeStorageService.remove('user');
    this.ngrxStore.dispatch({ type: EnumActions.GetUser, payload: null });
    return true;
  }

}
