import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Farmacia } from 'src/app/interfaces/farmacia';
import { FarmaciaService } from 'src/app/service/farmacia.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detallefarmacia',
  templateUrl: './detallefarmacia.component.html',
  styleUrls: ['./detallefarmacia.component.scss'],
})
export class DetallefarmaciaComponent  implements OnInit {
  farmacia: Farmacia;
  constructor(
    private route: ActivatedRoute,
    private farmaciaService: FarmaciaService,
    private location: Location

  ) { }

  ngOnInit() {
    this.getFarmacia();
  }

  getFarmacia(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.farmaciaService.getFarmacia(id).subscribe(farmacia => this.farmacia = farmacia);
  }



  goBack(): void {
    this.location.back();
  }

}
