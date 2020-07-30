import { Component, OnInit } from '@angular/core';
import {AlertController, NavController, ToastController} from '@ionic/angular';
import { FormGroup, FormControl} from '@angular/forms';
import validator from 'validator';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  showPassword = false;
  passwordToggleIcon = "eye" ;

  mostarValidacion = false;
  validacionToggleIcon = "eye";

  usuario = {
    nombre: "" ,
    paterno:"",
    materno:"",
    tele:"",
    password: "" ,
    password2: "" ,
    email: ""
    };

  
  isLogged: boolean;


  constructor(private alertCtrl: AlertController,public navCtrl: NavController,public toastCtrl: ToastController) { }

  loginForm = new FormGroup({
    userEmail: new FormControl(''),
    userPassword: new FormControl(''),
    userPassword2: new FormControl(''),
    });


    loginFormValidator = {
      userEmail: {
      empty: '',
      email: '',
      },
      userPassword: {
      empty: '',
      password: '',
      mensaje: '',
      },
      userPassword2: {
      empty: '',
      password: '',
      mensaje: '',
      }
    
      };

  ngOnInit() {
  }


  formValidator(): boolean {
    if (validator.isEmpty(this.loginForm.value.userEmail)) {
    this.loginFormValidator.userEmail.empty = 'La dirección de correo es requerida';
    return false;
    } else {
    this.loginFormValidator.userEmail.empty = '';
    }
    if (!validator.isEmail(this.loginForm.value.userEmail)) {
    this.loginFormValidator.userEmail.email = 'Ingrese una dirección de correo válida';
    return false;
    } else {
    this.loginFormValidator.userEmail.email = '';
    }

    if (validator.isEmpty(this.loginForm.value.userPassword)) {
    this.loginFormValidator.userPassword.empty = 'La contraseña es requerida';
    return false;
    } else {
    this.loginFormValidator.userPassword.empty = '';
    }
    
    if (validator.isEmpty(this.loginForm.value.userPassword2)) {
      this.loginFormValidator.userPassword2.empty = 'La contraseña es requerida';
      return false;
      } else {
      this.loginFormValidator.userPassword2.empty = '';
      }
      return true;


      }


      valicontra(): any{
        if(this.loginFormValidator.userPassword.password==this.loginFormValidator.userPassword2.password){
        this.loginFormValidator.userPassword.mensaje = 'Las contraseñas coinciden. Ahora puede continuar con su registro.';
        }
        else{
        this.loginFormValidator.userPassword.mensaje = 'Las contraseñas no coinciden';
        }
      }

      onSubmit() {    
        if (this.formValidator() && this.valicontra()) {
          console.log('Formulario Validado');
          }   
        }


        onSubmitTemplate(){
          console.log('Form submit');
          console.log(this.usuario);
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
  toggleValidacion(): void {
    this.mostarValidacion = !this.mostarValidacion;
    if(this.validacionToggleIcon == 'eye'){
      this.validacionToggleIcon = 'eye-off';
    }
    else{
      this.validacionToggleIcon = 'eye';
    }
  }
  async presentAlert() {
      const alert = this.alertCtrl.create({
      header: 'Guardado',
      subHeader: 'Su información se ha guardado correctamente, recibirá un mensaje a su correo para la confirmación de su cuenta.',
      buttons: ['Ok']
     }).then(alert=> alert.present());

     console.log(this.usuario,this.usuario.paterno,this.usuario.materno,this.usuario.tele,this.loginForm.value);
     
  }

  
  

}

