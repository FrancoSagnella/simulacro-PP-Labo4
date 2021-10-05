import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Actor } from 'src/app/clases/actor';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  actor:Actor = {id:0,nombre:'',apellido:'', pais:'', sexo:''};
  formGroup!:FormGroup;

  constructor(private fb:FormBuilder, private firestore:FirestoreService, private router:Router, private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'nombre':['',[Validators.required,this.validadorDeEspacios]],
      'apellido':['',Validators.required,this.validadorDeEspacios],
      'sexo':['',Validators.required],
      'pais':['',[Validators.required]],
    });
  }

  private validadorDeEspacios(control:AbstractControl):null|object{
    let nombre:string = control.value;
    // agarro el valor que hay dentro del control, y si incluye o no determinados caracteres, me devuelve bool
    let espacios = nombre.includes(' ');
    if(espacios)
      return {validadorDeEspacios:true};
    else
      return {validadorDeEspacios:false};
  }

  enviar(){
    this.actor.nombre = this.formGroup.controls.nombre.value;
    this.actor.apellido = this.formGroup.controls.apellido.value;
    this.actor.pais = this.formGroup.controls.pais.value;
    this.actor.sexo = this.formGroup.controls.sexo.value;


    this.afs.collection<Actor>('actores', ref => ref.orderBy('id', 'desc').limit(1)).snapshotChanges().subscribe(snapshot => {

      let ultimoId:number;
      ultimoId = snapshot[0].payload.doc.data().id;
      this.actor.id = ultimoId;

    });

    setTimeout(()=>{
      this.actor.id = this.actor.id+1;
      this.firestore.crear('actores', this.actor);
      this.router.navigate(['/busqueda']);
    }, 1200);
  }

  volver(){
    this.router.navigate(['/busqueda']);
  }

  paisElegido(e:string) {
    this.formGroup.controls.pais.setValue(e);
  }
}
