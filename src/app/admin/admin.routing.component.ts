import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminCategoryComponent} from './admin-category/admin-category.component';
import {AdminProductComponent} from './admin-product/admin-product.component';
import {VideoComponent} from './video/video.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: '' , component: LoginComponent},
      {path: 'dashboard' , component: DashboardComponent},
      {path: 'category' , component: AdminCategoryComponent},
      {path: 'products', component: AdminProductComponent},
      {path: 'video', component: VideoComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
