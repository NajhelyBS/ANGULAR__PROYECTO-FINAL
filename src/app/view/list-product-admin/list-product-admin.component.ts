import { Component, OnInit } from '@angular/core';
//imports para mostrar datos
import { Product } from 'src/app/interfaces/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

//alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product-admin',
  templateUrl: './list-product-admin.component.html',
  styleUrls: ['./list-product-admin.component.css']
})
export class ListProductAdminComponent implements OnInit {

  productos!:Product[];
  page_actual = 1;

  constructor(
    private productosservice:ProductServiceService){}

   ngOnInit(): void {
    this.productosservice.getProducto().subscribe(Productos => {
      this.productos = Productos;
    });
  }


  Delete(producto: Product){

    Swal.fire({
      title: 'Estás seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar artículo!'
    
    }).then((result) => {
      if (result.isConfirmed) {
        const response =this.productosservice.deleteProducto(producto);
        Swal.fire(
          'Borrado!',
          'El artículo ha sido eliminado.',
          'success'
        )
        console.log(response);
      }
    })

  }
}
