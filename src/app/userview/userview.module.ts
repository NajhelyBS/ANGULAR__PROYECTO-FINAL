import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos/pedidos.component';



@NgModule({
  declarations: [
    PedidosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PedidosComponent,

  ]
})
export class UserviewModule { }
