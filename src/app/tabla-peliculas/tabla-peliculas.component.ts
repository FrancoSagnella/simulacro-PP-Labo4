import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { FirestoreService } from '../servicios/firestore.service';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.scss']
})
export class TablaPeliculasComponent implements OnInit {

  peliculas:Pelicula[] = [];
  @Output()  elegirPelicula:EventEmitter<any> = new EventEmitter<any>();

  constructor(private firestore:FirestoreService) { }

  ngOnInit(): void {
    this.firestore.obtenerTodos('peliculas').subscribe((peliculasSnapshot) => {
      this.peliculas = [];
      peliculasSnapshot.forEach((peliculaData: any) => {
        let data = peliculaData.payload.doc.data();
        this.peliculas.push({ nombre:data.nombre, id:data.id, tipo:data.tipo, foto:data.foto, cantPublico:data.cantPublico, fechaEstreno:data.fechaEstreno, actor:data.actor });
      })
    });
  }

  onElegirPelicula(item:any) {
    this.elegirPelicula.emit(item);
  }
}
