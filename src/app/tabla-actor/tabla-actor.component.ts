import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from '../clases/actor';
import { FirestoreService } from '../servicios/firestore.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  actores:Actor[] = [];
  @Output() elegirActor:EventEmitter<any> = new EventEmitter<any>();

  constructor(private firestore:FirestoreService) { }

  ngOnInit(): void {
    this.firestore.obtenerTodos('actores').subscribe((actoressSnapshot) => {
      this.actores = [];
      actoressSnapshot.forEach((peliculaData: any) => {
        let data = peliculaData.payload.doc.data();
        this.actores.push({ nombre:data.nombre, id:data.id, pais:data.pais, apellido:data.apellido, sexo:data.sexo });
      })
    });
  }

  onElegirActor(item:any){
    this.elegirActor.emit(item);
  }
}
