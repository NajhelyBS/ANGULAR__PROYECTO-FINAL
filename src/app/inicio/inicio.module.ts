import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    HomeComponent,
  ]
})
export class InicioModule { }
