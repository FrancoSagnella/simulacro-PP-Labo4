import { Component, OnInit } from '@angular/core';
import { Actor } from '../clases/actor';
import { Pelicula } from '../clases/pelicula';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})
export class ActorPeliculaComponent implements OnInit {

  tablaActores:boolean = false;
  actorSeleccionado?:Actor;

  mostrarDetalles!:boolean;
  mostrarPais!:boolean;
  mostrarPeliculas!:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarTablaActores() {
    if(this.tablaActores)
    {
      this.tablaActores = false;
    }
    else{
      this.tablaActores = true;
    }
  }

  meElegirActor(item:any) {
    this.actorSeleccionado = item;
  }

  meMostrarDetalles(e:any){
    this.mostrarDetalles = e;
  }
  meMostrarPais(e:any){
    this.mostrarPais = e;
  }
  meMostrarPeliculas(e:any){
    this.mostrarPeliculas = e;
  }
}
