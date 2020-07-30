import { Component, OnInit, NgModule } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import {LoadingController} from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ingresa-productos',
  templateUrl: './ingresa-productos.page.html',
  styleUrls: ['./ingresa-productos.page.scss'],
})
export class IngresaProductosPage implements OnInit {
  nombre:string;
  archivo:File;
  descripcion:string;
  unidad:number;
  precio:number;
  existencia:number;
  descuento:number;

  constructor(private alertCtrl:AlertController, private loadingCtrl:LoadingController) { }
  ngOnInit() {
    this.ionViewWillLeave();
  }

  async presentAlert() {
    const alert = this.alertCtrl.create({
    header: 'Guardado',
    subHeader: 'Su información se ha guardado correctamente.Ahora estas listo para recibir pedidos.',
    buttons: [{
      text: 'Ok',
      handler: ()=>{
      location.href="/proveedor/home"
      }
    }]
   }).then(alert=> alert.present());
   console.log(this.nombre, this.archivo, this.descripcion, this.unidad, this.precio, this.existencia, this.descuento);
   
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

img1:any;

  fileChange(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      let fileList: FileList = event.target.files;  
      let file: File = fileList[0];
      console.log(file);
  }

}
