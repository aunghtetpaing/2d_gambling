import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  user: any = {
    password: '',
    phoneNumber: ''
  };

  constructor(
    private autService: AuthService,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
  ) { }

  private async loginToast(toastHeader: string, toastMessage: string) {
    const toast = await this.toastCtrl.create({
      header: toastHeader,
      message: toastMessage,
      duration: 2000,
      position: 'top'
    });

    return toast.present();
  }

  ngOnInit() { }

  async login(): Promise<any> {
    if(this.user.password === '' || this.user.phoneNumber === '') {
      return this.loginToast('Login Failed!', 'All fileds are required!');
    }

    const isUser = await this.autService.login(this.user.phoneNumber, this.user.password);
    
    if(isUser) {
      this.loginToast('Login', 'Successfully LoggedIn');
      this.navCtrl.navigateRoot('dashboard');
    }

  }

}
