import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FarmaciasComponent } from './components/farmacias/farmacias.component';
import { DetallefarmaciaComponent } from './components/detallefarmacia/detallefarmacia.component';
import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';
import { DetallemedicamentoComponent } from './components/detallemedicamento/detallemedicamento.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrousuariosComponent } from './components/registrousuarios/registrousuarios.component';
import { CrearfarmaciaComponent } from './components/crearfarmacia/crearfarmacia.component';

const routes: Routes = [
  {path: '', redirectTo: '/farmacias', pathMatch: 'full'},
  {path: 'farmacias', component: FarmaciasComponent},
  { path: 'farmaciadetalle/:id', component: DetallefarmaciaComponent },
  { path: 'medicamentodetalle/:id', component: DetallemedicamentoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrousuario', component: RegistrousuariosComponent },
  { path: 'crearfarmacias', component: CrearfarmaciaComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
