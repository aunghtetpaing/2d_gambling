import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Contacts } from '@ionic-native/contacts/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { twoDTrans } from 'src/app/_models/bet';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})

export class CreateComponent implements OnInit {

  number: string = '';
  amount: number = 200;
  type: string = 'Power';

  public transLists: any = [];
  public showLists: boolean = false;

  constructor(
    private modelCtrl: ModalController,
    private contacts: Contacts,
    private nativeStorage: NativeStorage,
    private toaseCtrl: ToastController
  ) { }

  async ngOnInit(): Promise<any> {
    await this.loadingData();
  }

  private async getTransList(): Promise<any> {
    const getlist =  await this.nativeStorage.getItem('translist').then((result) => {
      return result;
    }).catch(() => {
      return [];
    })

    return await getlist;
  }

  private async toastAlert(title: string, description:string): Promise<any> {
    const toast = await this.toaseCtrl.create({
      header: title,
      message: description,
      duration: 2000,
      position: 'bottom'
    });

    return await toast.present();
  }

  private async loadingData(): Promise<any> {
    this.transLists = await this.getTransList();
    this.transLists.length > 0 ? this.showLists = true : this.showLists = false;
  }

  public addTrans() {
    if(this.number === '' || this.amount === 0 || !this.amount) {
      return this.toastAlert('Failed!', '2D number and amount are required and amount must be number!');
    }
   
    let newTrans: twoDTrans = {
      number : this.number,
      amount: this.amount,
      type: 'Power'
    };

    let duplicate: any = this.transLists.some(trans => trans.number === this.number);

    if(duplicate) {
      return this.toastAlert('Failed!', '2D number is already exist!');
    }

    this.transLists.push(newTrans);
    this.nativeStorage.setItem('translist',this.transLists).then((result) => {
      this.number = '';
      this.type = '';
      this.amount = 0;
      this.loadingData();
    });
    
  }

  public async clear(): Promise<any> {
    return await this.nativeStorage.remove('translist').then((result) => {
      this.loadingData();
      return result;
    }).catch(() => {
      return null;
    });
  }

  public async remove(trans: any): Promise<any> {
   let newTransLists =  this.transLists.filter((value: twoDTrans) => value.number !== trans.number);
   return await this.nativeStorage.setItem('translist', newTransLists).then((result) => {
    this.loadingData();
    return result;
   }).catch(() => {
     return null;
   });
  }

  // public openContentBook() {
  //   this.contacts.pickContact().then((result) => {
  //     this.createBet.name = result.displayName;

  //     if(result.phoneNumbers.length > 0) {
  //       result.phoneNumbers.map((value) => {

  //         if(value.value !== null) {
  //           this.createBet.phone = value.value;
  //         }
  //       })
  //     }
  //   });
  // }

  closeForm() {
    this.modelCtrl.dismiss();
  }
}
