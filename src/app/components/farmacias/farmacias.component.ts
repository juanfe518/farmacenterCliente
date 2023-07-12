import { Component, OnInit } from '@angular/core';
import { Farmacia } from 'src/app/interfaces/farmacia';
import { FarmaciaService } from 'src/app/service/farmacia.service';

@Component({
  selector: 'app-farmacias',
  templateUrl: './farmacias.component.html',
  styleUrls: ['./farmacias.component.scss'],
})
export class FarmaciasComponent  implements OnInit {

  farmacias : Farmacia[] = [];
  constructor(private farmaciaService:FarmaciaService) {}
  component = FarmaciasComponent;
  ngOnInit(): void {
    this.getAllFarmacias();
  }

  getAllFarmacias (){
    this.farmaciaService.getAllFarmacias().subscribe(farmacias => {
      this.farmacias = farmacias;
    });
  }
}
