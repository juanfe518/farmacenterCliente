import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Farmacia } from '../interfaces/farmacia';
import { Medicamento } from '../interfaces/medicamento';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {
  private api = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  getAllFarmacias(){
    const path = `${this.api}/farmacias`;
    return this.httpClient.get<Farmacia[]>(path);
  }

  getFarmacia(id:any) : Observable<Farmacia>{
    const path = `${this.api}/farmacia/${id}`;
    return this.httpClient.get<Farmacia>(path);
  }

  createfarmacia(farmacia:Farmacia){
    const path = `${this.api}/postfarmacia`;
    return this.httpClient.post(path, farmacia);
  }



  //////////////////////////////////////////// MEDICAMENTOS ////////////////////////////////////////////

  getAllMedicamentos(){
    const path = `${this.api}/medicamentos`;
    return this.httpClient.get<Medicamento[]>(path);
  }

  getMedicamento(id:any): Observable<Medicamento>{
    const path = `${this.api}/medicamento/${id}`;
    return this.httpClient.get<Medicamento>(path);
  }



  ////////////////////////////////////////////// LOGIN /////////////////////////////////////////////////////////

  getLogin(correo: string, contrasenia: string){
    const path = `${this.api}/usuarios/inicio-sesion`;
    const loginData: Login = { correo, contrasenia };
    return this.httpClient.post<Login>(path, loginData);
  }

  //////////////////////////////////////////// REGISTRO DE USUARIO ////////////////////////////////////////////

  getRegistro(usuario: Usuario){
    const path = `${this.api}/usuarios/registro`;
    return this.httpClient.post<Usuario>(path, usuario);
  }
}
