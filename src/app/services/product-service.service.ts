import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private fireStore:Firestore) { }

  addProducto(productos:Product){
    const productosRef = collection(this.fireStore,'productos');
    return addDoc(productosRef, productos);

  }

  getProducto():Observable<Product[]>{
    const productosRef = collection(this.fireStore, 'productos');
    return collectionData(productosRef, {idField:'id'}) as Observable<Product[]>
  }

  deleteProducto(productos:Product){
    const productosRef = doc (this.fireStore, `productos/${productos.id}`);
    return deleteDoc(productosRef);
  }

}
