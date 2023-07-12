import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicamento } from 'src/app/interfaces/medicamento';
import { FarmaciaService } from 'src/app/service/farmacia.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detallemedicamento',
  templateUrl: './detallemedicamento.component.html',
  styleUrls: ['./detallemedicamento.component.scss'],
})
export class DetallemedicamentoComponent  implements OnInit {
  medicamento:Medicamento;
  constructor(
    private location: Location,
    private farmaciaService: FarmaciaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMedicamento();
  }

  getMedicamento(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.farmaciaService.getMedicamento(id).subscribe(medicamento => this.medicamento = medicamento);
  }

  goBack(): void {
    this.location.back();
  }

}
