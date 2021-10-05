import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';
import { ActorAltaComponent } from './actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor/actor-listado/actor-listado.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PeliculaAltaComponent } from './peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './peliculas/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  {path: 'bienvenido', component:BienvenidoComponent},
  {path: 'busqueda', component:BusquedaComponent},
  {path: 'peliculas/alta', component:PeliculaAltaComponent},
  {path: 'peliculas/listado', component:PeliculaListadoComponent},
  {path: 'actor/alta', component:ActorAltaComponent},
  {path: 'actor/listado', component:ActorListadoComponent},
  {path: 'actor/actorpelicula', component:ActorPeliculaComponent},
  {path:'**', redirectTo:'busqueda', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
