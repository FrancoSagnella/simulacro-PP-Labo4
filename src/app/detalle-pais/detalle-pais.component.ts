import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from '../clases/actor';
import { PaisesService } from '../servicios/paises.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent implements OnInit {

  @Input() actorRecibido?:Actor;
  @Output() limpiar:EventEmitter<any> = new EventEmitter<any>();
  listaPaises?:any;

  constructor(private paises:PaisesService) { }

  ngOnInit(): void {
    this.paises.traerTodosOk().subscribe(response => {
      this.listaPaises = response;
    });
  }

  limpiarPais() {
    this.actorRecibido = undefined;
    this.limpiar.emit(false);
  }

}
