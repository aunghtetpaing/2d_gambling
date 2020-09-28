import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthService } from './providers/auth.service';
import { User } from './_models/user';
import { EnumActions } from './store/actions/user.actions';
import { UserLists } from './_demoData';
import { UserState } from './store/state/user.state';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent  implements OnInit {

  user$: Observable<UserState> = this.ngrxStore.select((state) => state.user);
  activeUser: User;
  isLoggedIn: boolean = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private authService: AuthService,
    private ngrxStore: Store<{user: UserState}>
  ) {

    this.ngrxStore.dispatch({ type: EnumActions.GetUsers, payload: UserLists });
    
    this.user$.subscribe((result) => {
      if(result.selectedUser) {
        this.activeUser = result.selectedUser;
        this.isLoggedIn = true;
      }
    });

    this.initializeApp();

  }

  ngOnInit() {
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public navigate(url: string) {
    this.navCtrl.navigateForward(url);
  }

  async logout(): Promise<any> {
    const isLogout = await this.authService.logOut();
    this.isLoggedIn = !isLogout;
    isLogout && this.navCtrl.navigateRoot('login');
  }
}
