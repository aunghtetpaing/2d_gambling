import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(
    private navCtrl: NavController,
    private nativeStorageService: NativeStorage,
  ){}

  async canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return await this.nativeStorageService.getItem('user').then((result) => {
      if(result) {
        return true;
      }
    }).catch((error) => {
      this.navCtrl.navigateRoot('login');
      return false;
    });
  }
  
}
