import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ListProductAdminComponent } from './list-product-admin/list-product-admin.component';
import { ComponentsModule } from '../components/components.module';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DetalleComponent } from './detalle/detalle.component';
import { AgregarcompraComponent } from './agregarcompra/agregarcompra.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCommonModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddProductComponent,
    ListProductComponent,
    ListProductAdminComponent,
    DetalleComponent,
    AgregarcompraComponent
  ],
  imports: [
   CommonModule,
   ComponentsModule,
   FormsModule,
   ReactiveFormsModule,
   MatButtonModule,
   MatFormFieldModule,
   MatIconModule,
   MatInputModule,
   MatDialogModule,
   MatMenuModule,
   MatCommonModule,
   RouterLink,
   RouterLinkActive,
   RouterModule,
  ],
  exports: [
    AddProductComponent,
    ListProductAdminComponent,
    ListProductComponent,
    AgregarcompraComponent,
    DetalleComponent,
  ]
})
export class ViewModule { }
