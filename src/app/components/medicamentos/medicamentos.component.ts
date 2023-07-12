import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/interfaces/medicamento';
import { FarmaciaService } from 'src/app/service/farmacia.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.scss'],
})
export class MedicamentosComponent  implements OnInit {

  medicamentos : Medicamento[] = [];
  constructor(private medicamentoService:FarmaciaService) {}

  ngOnInit(): void {
    this.getAllMedicamentos();
  }

  getAllMedicamentos (){
    this.medicamentoService.getAllMedicamentos().subscribe(medicamentos => {
      this.medicamentos = medicamentos;
    });
  }
}
