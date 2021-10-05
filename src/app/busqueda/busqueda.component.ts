import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  tablaPeliculas:boolean = false;
  tablaActores:boolean = false;

  peliculaSeleccionada?:Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarTablaPeliculas() {
    if(this.tablaPeliculas)
    {
      this.tablaPeliculas = false;
    }
    else{
      this.tablaPeliculas = true;
    }
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

  meElegirPelicula(item:any) {
    this.peliculaSeleccionada = item;
  }
}
