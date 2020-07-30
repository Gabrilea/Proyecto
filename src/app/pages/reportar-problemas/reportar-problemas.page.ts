import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reportar-problemas',
  templateUrl: './reportar-problemas.page.html',
  styleUrls: ['./reportar-problemas.page.scss'],
})
export class ReportarProblemasPage implements OnInit {

  constructor(private loadingCtrl:LoadingController) { }

  async presentLoading(){
    const loading=await this.loadingCtrl.create({
      message:'Espere',
      duration:500
    });
    return await loading.present();
  }

  ngOnInit() {
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
