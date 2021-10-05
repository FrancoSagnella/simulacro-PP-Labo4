import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Pelicula } from '../clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnChanges {

  @Input() peliculaRecibida!:any;
  actores:any[] = [];

  constructor(private afs:AngularFirestore) { }

  ngOnChanges(): void {
    this.afs.collection('actores', ref => ref.where('id', '==', this.peliculaRecibida.actor)).snapshotChanges().subscribe(snapshot => {
      this.actores = [];
      snapshot.forEach((peliculaData:any)=>{
        let data = peliculaData.payload.doc.data();
        this.actores.push({ nombre:data.nombre, apellido:data.apellido, pais:data.pais });
      });
    });
  }

  limpiarDetalle() {
    this.peliculaRecibida = undefined;
  }
}
