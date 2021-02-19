import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductCatComponent } from './product-cat/product-cat.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HistoryComponent } from './history/history.component';
import { ProcessComponent } from './process/process.component';



@NgModule({
  declarations: [NavComponent, FooterComponent, HomePageComponent, ProductCatComponent, AboutUsComponent, HistoryComponent, ProcessComponent],
  imports: [
    CommonModule
  ]
})
export class SiteModule { }
