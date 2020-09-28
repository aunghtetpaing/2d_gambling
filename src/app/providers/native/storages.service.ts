import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({ providedIn: 'root' })

export class StoragesService {

  constructor(
    private storageService: NativeStorage
  ) { }

  public async store(key: string, data: any): Promise<any> {
    return await this.storageService.setItem(key, data);
  }

  public async getData(key:string): Promise<any> {
    return await this.storageService.getItem(key);
  }
}