import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductCatComponent } from './product-cat/product-cat.component';



@NgModule({
  declarations: [NavComponent, FooterComponent, HomePageComponent, ProductCatComponent],
  imports: [
    CommonModule
  ]
})
export class SiteModule { }
