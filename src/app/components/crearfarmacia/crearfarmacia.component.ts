import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FarmaciaService } from 'src/app/service/farmacia.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crearfarmacia',
  templateUrl: './crearfarmacia.component.html',
  styleUrls: ['./crearfarmacia.component.scss'],
})
export class CrearfarmaciaComponent  implements OnInit {

  loginForm: FormGroup = new FormGroup({
    nombre_farmacia: new FormControl(),
    direccion_farmacia: new FormControl()
  });
  public alertButtons = ['OK'];

  constructor(
    private fb: FormBuilder, 
    private alertController: AlertController,
    private loginService: FarmaciaService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.setLoginControls();
  }
  
  setLoginControls() {
    this.loginForm = this.fb.group({
      nombre_farmacia: ['', [Validators.required]],
      direccion_farmacia: ['', [Validators.required]],
    });
  }

  crearFarmacia() {
    const form = this.loginForm.getRawValue();
    if (!this.loginForm.valid) {
      this.presentAlert();
      return
    }
    this.loginService.createfarmacia(form).subscribe((registro) => {
      if(registro.nombre_farmacia){
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
      message: 'La farmacia no se creó correctamente!',
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

  goBack(): void {
    this.location.back();
  }

}
