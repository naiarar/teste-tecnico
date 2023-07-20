import { Component } from '@angular/core';
import { CatalogoService } from '../services/catalogo.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']


})

export class AdminComponent {
  carros: any
  constructor(private catalogoService: CatalogoService) {
    this.catalogoService.carros().subscribe((result) => {
      this.carros = result
    });
  }
}
