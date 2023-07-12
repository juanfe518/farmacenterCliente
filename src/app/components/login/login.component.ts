import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FarmaciaService } from 'src/app/service/farmacia.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  loginForm: FormGroup = new FormGroup({
    correo: new FormControl(),
    contrasenia: new FormControl()
  });
  public alertButtons = ['OK'];

  constructor(
    private fb: FormBuilder, 
    private alertController: AlertController,
    private loginService: FarmaciaService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.setLoginControls();
  }
  
  setLoginControls() {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required]],
      contrasenia: ['', [Validators.required]],
    });
  }

  onLogin() {
    const form = this.loginForm.getRawValue();
    if (!this.loginForm.valid) {
      this.presentAlert();
      return
    }
    this.loginService.getLogin(form.correo,form.contrasenia).subscribe((registro) => {
      if(registro.correo){
        const logedUser = "true"; 

        localStorage.setItem('rol', logedUser);
        console.log('Bandera')
        this.router.navigateByUrl('/farmacias').then(() => {
          window.location.reload();
        });
      }else{
        this.AlertError();
      }
    })
  }

  async AlertError() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Opss...',
      message: 'Datos de acceso incorrectos!',
      buttons: this.alertButtons,
      cssClass: 'custom-alert'
    });
  
    await alert.present();
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Opss...',
      message: 'Todos los campos son requeridos!',
      buttons: this.alertButtons,
      cssClass: 'custom-alert'
    });
  
    await alert.present();
  }

}
