import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import Swal from 'sweetalert2';



@Component({
  selector: 'app-agregarcompra',
  templateUrl: './agregarcompra.component.html',
  styleUrls: ['./agregarcompra.component.css']
})
export class AgregarcompraComponent {

constructor(
  public dialogRef: MatDialogRef<AgregarcompraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

count = 0;

    Increment(){
        this.count++  
    }
  
    Decrement(){
      this.count--
    }
    
add() {
  Swal.fire({
    icon: 'success',
    title: 'Producto añadido',
  });

}

onNoClick() {
  this.dialogRef.close();
}


}
