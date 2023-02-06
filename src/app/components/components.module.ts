import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './header-user/header-user.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ViewModule } from '../view/view.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderUserComponent,
    HeaderAdminComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    
  ],
  exports: [
    HeaderUserComponent,
    HeaderAdminComponent,
  ]

})
export class ComponentsModule { }
