import { Component, OnInit } from '@angular/core';
//imports para mostrar datos
import { Product } from 'src/app/interfaces/product';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Router } from '@angular/router';
//alert
import Swal from 'sweetalert2';

//imports para que funcione el dialog
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { AgregarcompraComponent } from '../agregarcompra/agregarcompra.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{

  productos!:Product[];

  constructor(
    private dialog:MatDialog,
    private productosservice:ProductServiceService,
    private ruta:Router,
    ){}

    openDialog():void {

      let dialogRef = this.dialog.open(AgregarcompraComponent, {
        width: '450px',
      });
    }

    Love(){
      
    }

   ngOnInit(): void {
    this.productosservice.getProducto().subscribe(Productos => {
      this.productos = Productos;
    });

  }


  Detalle(){
    
  }
}
