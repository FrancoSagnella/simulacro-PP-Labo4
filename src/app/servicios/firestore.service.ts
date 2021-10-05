import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private coleccionMensaje:AngularFirestoreCollection<any>;

  constructor(private firestore:AngularFirestore) {
    this.coleccionMensaje=firestore.collection<any>('mensajes');
   }

   guardarMensajeFirestore(datos:any){
     this.coleccionMensaje.add(datos);
   }

  //Crea un nuevo dato
  public crear(collection: string, data: any) {
    return this.firestore.collection(collection).add(data);
  }
  //Obtiene un datos
  public obtenerById(collection:string, documentId: string) {
    return this.firestore.collection(collection).doc(documentId).snapshotChanges();
  }
  //Obtiene todos los datos
  public obtenerTodos(collection: string) {
    return this.firestore.collection(collection).snapshotChanges();
  }
  //Actualiza un dato
  public actualizar(collection: string, documentId: string, data: any) {
    return this.firestore.collection(collection).doc(documentId).set(data);
  }
}
