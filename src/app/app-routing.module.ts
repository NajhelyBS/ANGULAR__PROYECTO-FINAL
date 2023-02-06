import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { HomeComponent } from './inicio/home/home.component';
import { RegisterComponent } from './inicio/register/register.component';
import { AddProductComponent } from './view/add-product/add-product.component';
import { ListProductAdminComponent } from './view/list-product-admin/list-product-admin.component';
import { ListProductComponent } from './view/list-product/list-product.component';

const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"home", component:HomeComponent},
  {path:"headerAdmin", component:HeaderAdminComponent,
  children: [
    {path:"add-product", component:AddProductComponent},
    {path:"list-product", component:ListProductAdminComponent},
  ]},

  {path:"headerUser", component:HeaderUserComponent,
  children: [
    {path:"listproduct", component:ListProductComponent},
    {path:"home", component:HomeComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
