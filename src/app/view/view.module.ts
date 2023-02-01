import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProductAdminComponent } from './list-product-admin/list-product-admin.component';



@NgModule({
  declarations: [
    AddProductComponent,
    ListProductComponent,
    ListProductAdminComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddProductComponent,
    ListProductAdminComponent,
    ListProductComponent,
  ]
})
export class ViewModule { }
