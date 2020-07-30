import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-perfil-proveedor',
  templateUrl: './perfil-proveedor.page.html',
  styleUrls: ['./perfil-proveedor.page.scss'],
})
export class PerfilProveedorPage implements OnInit {

image:any;

  constructor(public camera: Camera) { }

  tomarGaleria(){
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetHeight: 1024,
      targetWidth: 1024,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }).then(resultado => {
      this.image ="data:image/jpeg;base64," + resultado;
    }).catch(error => {
      console.log(error);
    })
  }

  ngOnInit() {
  }

}
