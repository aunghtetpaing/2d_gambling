import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.page.html',
  styleUrls: ['./bet.page.scss'],
})
export class BetPage implements OnInit {

  constructor(
    private modelCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  async openBetForm(data: any): Promise<any> {
   const model = await this.modelCtrl.create({
     component: CreateComponent,
     componentProps: data,
   });

   return await model.present();
  }

}
