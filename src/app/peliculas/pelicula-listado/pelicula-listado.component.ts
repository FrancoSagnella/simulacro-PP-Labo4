import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnChanges {

  listadoPeliculas!:Pelicula[];
  @Input() actorRecibido!:any;
  @Output() limpiar:EventEmitter<any> = new EventEmitter<any>();

  constructor(private afs:AngularFirestore) { }

  // Si yo quiero que al pasarle un nuevo Input haga cosas direfentes, como ene ste caso traerme colecciones diferentes
  // puedo usar en ngOnChanges en vez del OnInit, entonces cada vez que me cambien los valores de los inputs se va a ejecutar
  ngOnChanges(): void {
      this.afs.collection('peliculas', ref => ref.where('actor', '==', this.actorRecibido.id)).snapshotChanges().subscribe(snapshot => {
        this.listadoPeliculas = [];
        snapshot.forEach((peliculaData:any)=>{
          let data = peliculaData.payload.doc.data();
          this.listadoPeliculas.push({ nombre:data.nombre, id:data.id, tipo:data.tipo, foto:data.foto, cantPublico:data.cantPublico, fechaEstreno:data.fechaEstreno });
        });
      });
  }

  limpiarDetalle() {
    this.actorRecibido = undefined;
    this.limpiar.emit(false);
  }
}
