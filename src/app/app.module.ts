import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FarmaciasComponent } from './components/farmacias/farmacias.component'
import { DetallefarmaciaComponent } from './components/detallefarmacia/detallefarmacia.component';
import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';
import { DetallemedicamentoComponent } from './components/detallemedicamento/detallemedicamento.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrousuariosComponent } from './components/registrousuarios/registrousuarios.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent, 
    FarmaciasComponent, 
    DetallefarmaciaComponent, 
    MedicamentosComponent, 
    DetallemedicamentoComponent,
    LoginComponent, 
    RegistrousuariosComponent,
    MenuComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot([]), IonicModule.forRoot({}), AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
