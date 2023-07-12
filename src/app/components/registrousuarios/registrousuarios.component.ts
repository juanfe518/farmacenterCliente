import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FarmaciaService } from 'src/app/service/farmacia.service';

@Component({
  selector: 'app-registrousuarios',
  templateUrl: './registrousuarios.component.html',
  styleUrls: ['./registrousuarios.component.scss'],
})
export class RegistrousuariosComponent  implements OnInit {

  loginForm: FormGroup = new FormGroup({
    nombre: new FormControl(),
    correo: new FormControl(),
    contrasenia: new FormControl()
  });
  public alertButtons = ['OK'];
  public alertButtonsRegistro = [
    {
      text: 'OK',
      handler: () => {
        this.router.navigateByUrl('/login');
      }
    }
  ];

  constructor(
    private fb: FormBuilder,
    private loginService: FarmaciaService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {this.setLoginControls();}

  setLoginControls() {
    this.loginForm = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      contrasenia: ['', [Validators.required]],
    });
  }
  
  onRegistro() {
    const form = this.loginForm.getRawValue();
    if (!this.loginForm.valid) {
      this.presentAlert();
      return
    }
    this.loginService.getRegistro(form).subscribe((registro) => {
      if(registro.correo){

        this.router.navigateByUrl('/farmacias').then(() => {
          window.location.reload();
        });
      }else{
        this.AlertEmail();
      }
    })
  }

  async AlertEmail() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Opss...',
      message: 'Este email ya se encuentra registrado!',
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

  async AlertOk() {
    const alert = await this.alertController.create({
      header: 'Exito',
      message: 'El usuario se ha creado exitosamente!',
      buttons: this.alertButtonsRegistro,
      cssClass: 'custom-alert'
    });
  
    await alert.present();
  }

}
