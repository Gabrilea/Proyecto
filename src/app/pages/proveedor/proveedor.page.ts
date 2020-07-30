import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.page.html',
  styleUrls: ['./proveedor.page.scss'],
})
export class ProveedorPage implements OnInit {

  constructor(private loadingCtrl:LoadingController) { }

  ngOnInit() {
    this.ionViewWillLeave();
  }

  async presentLoading(message:string){
    const loading=await this.loadingCtrl.create({
      message,
      duration:500
    });
    return await loading.present();
  }
  
  ionViewWillLeave(){
    this.presentLoading('Espere');
  }


}
