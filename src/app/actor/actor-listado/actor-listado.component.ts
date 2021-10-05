import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  actores:Actor[] = [];
  @Output() elegirActor:EventEmitter<any> = new EventEmitter<any>();
  @Output() mostrarPeliculas:EventEmitter<any> = new EventEmitter<any>();
  @Output() mostrarPais:EventEmitter<any> = new EventEmitter<any>();
  @Output() mostrarDetalles:EventEmitter<any> = new EventEmitter<any>();


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

  onElegirActor(item:any, mostrar:string){
    if(mostrar == 'peliculas')
    {
      this.mostrarPeliculas.emit(true);
    }
    else if(mostrar == 'pais')
    {
      this.mostrarPais.emit(true);
    }
    else
    {
      this.mostrarDetalles.emit(true);
    }
      this.elegirActor.emit(item);
  }

}
