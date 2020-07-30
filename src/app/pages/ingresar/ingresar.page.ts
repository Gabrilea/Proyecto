import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';
import { Observable } from 'rxjs';

@Component ({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  showPassword = false;
  passwordToggleIcon = "eye-off" ;

  usuario:string;
  contra:string;

  constructor( private loadingCtrl:LoadingController) { }

  ngOnInit() {

  }

  togglePassword(): void{
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }
    else{
      this.passwordToggleIcon = 'eye';
    }
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