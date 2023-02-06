import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  public RegistroProduct!: FormGroup;

  constructor(
    private productoservice:ProductServiceService, 
    private router:Router, 
    private formBuilder:FormBuilder){}


  ngOnInit(): void {
    this.RegistroProduct = this.formBuilder.group({
      producto:['',[
        Validators.required,
        Validators.minLength(4)
      ]] ,
      costo:['',[
        Validators.required,
      ]] ,
      oferta:['', [
        Validators.required,
      ]],
      descripcion:['', [
        Validators.required,
      ]],
      imagen:['',[
        Validators.required,
      ]]
    });
  }
  

  async onSubmit() {
    this.productoservice.addProducto(this.RegistroProduct.value).then( response => {
      console.log(response)
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'El producto ha sido registrado correctamente.'
      });
    })
    .catch( error => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un problema al agregar el producto, por favor intente de nuevo.'
      });
    });
  }
}
