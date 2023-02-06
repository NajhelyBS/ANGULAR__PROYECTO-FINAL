import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { HomeComponent } from './inicio/home/home.component';
import { RegisterComponent } from './inicio/register/register.component';
import { AddProductComponent } from './view/add-product/add-product.component';
import { DetalleComponent } from './view/detalle/detalle.component';
import { ListProductAdminComponent } from './view/list-product-admin/list-product-admin.component';
import { ListProductComponent } from './view/list-product/list-product.component';

const routes: Routes = [
  {path:"", redirectTo:"register", pathMatch:'full'},
  {path:"register", component:RegisterComponent},
  {path:"home", component:HomeComponent},
  {path:"headerAdmin", component:HeaderAdminComponent,
  children: [
    {path:"add-product", component:AddProductComponent},
    {path:"list-product", component:ListProductAdminComponent},
    {path:"listproduct", component:ListProductComponent},
    {path:"home", component:HomeComponent},
    {path:'detalle/:id',component:DetalleComponent},
  ]},

  {path:"headerUser", component:HeaderUserComponent,
  children: [
    {path:"listproduct", component:ListProductComponent},
    {path:"home", component:HomeComponent},
    {path:"detalle", component:DetalleComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
