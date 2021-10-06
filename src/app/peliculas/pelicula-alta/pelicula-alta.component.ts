import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Actor } from 'src/app/clases/actor';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  pelicula:Pelicula = {id:'',nombre:'',fechaEstreno:'',cantPublico:0,tipo:'',foto:''};
  formGroup!:FormGroup;
  foto:any;
  actorSeleccionado!:Actor;

  // sotrageRef = this.firestorage.storage.ref();

  constructor(private fb:FormBuilder,
              private firestore:FirestoreService,
              private router:Router,
              private firestorage:AngularFireStorage,
              private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'nombre':['',[Validators.required]],
      'tipo':['',Validators.required],
      'fechaEstreno':['',Validators.required],
      'cantPublico':['',[Validators.required]],
      'foto':[null,[Validators.required]],
      'actor':['',[Validators.required]],
    });
  }

  enviar(){

    this.pelicula.nombre = this.formGroup.controls.nombre.value;
    this.pelicula.tipo = this.formGroup.controls.tipo.value;
    this.pelicula.fechaEstreno = this.formGroup.controls.fechaEstreno.value;
    this.pelicula.cantPublico = this.formGroup.controls.cantPublico.value;
    this.pelicula.actor = this.actorSeleccionado.id;

    let pathRef = `fotos/`+this.pelicula.nombre;
    const fileRef = this.firestorage.ref(pathRef);
    const task = this.firestorage.upload(pathRef, this.foto);

    task.snapshotChanges().toPromise().then(() => {
      fileRef.getDownloadURL().toPromise().then(response => {

        this.pelicula.foto = response;
        this.pelicula.id = this.afs.createId();

        this.firestore.actualizar('peliculas', this.pelicula.id, this.pelicula).then(()=>{
          this.router.navigate(['/busqueda']);
        });
      });
    });
  }


  onSelecFoto(e:any){
    if(e.target.files && e.target.files[0])
    {
      this.foto = e.target.files[0];
    }
  }

  actorElegido(e:any){
    this.actorSeleccionado = e;
    this.formGroup.controls.actor.setValue(e.nombre);
  }

  volver(){
    this.router.navigate(['/busqueda']);
  }
}
