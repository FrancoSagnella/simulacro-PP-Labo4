import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Actor } from '../clases/actor';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.scss']
})
export class DetalleActorComponent implements OnInit {

  @Input() actorRecibido?:Actor;
  @Output() limpiar:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  limpiarDetalle() {
    this.actorRecibido = undefined;
    this.limpiar.emit(false);
  }
}
