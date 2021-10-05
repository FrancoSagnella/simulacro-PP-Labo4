import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { TablaPeliculasComponent } from './tabla-peliculas/tabla-peliculas.component';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ActorListadoComponent } from './actor/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './actor/actor-alta/actor-alta.component';
import { PeliculaListadoComponent } from './peliculas/pelicula-listado/pelicula-listado.component';
import { PeliculaAltaComponent } from './peliculas/pelicula-alta/pelicula-alta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaActorComponent } from './tabla-actor/tabla-actor.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    TablaPeliculasComponent,
    DetallePeliculaComponent,
    ActorListadoComponent,
    ActorAltaComponent,
    PeliculaListadoComponent,
    PeliculaAltaComponent,
    TablaPaisesComponent,
    TablaActorComponent,
    ActorPeliculaComponent,
    DetalleActorComponent,
    DetallePaisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
