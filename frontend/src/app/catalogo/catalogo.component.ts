import { Component } from '@angular/core';
import { CatalogoService } from '../services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  carros: any
  constructor(private catalogoService: CatalogoService) {
    this.catalogoService.carros().subscribe(result => {
      this.carros = result
    })
  }
}
