import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SiteComponent} from './site.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ProcessComponent} from './process/process.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ProductCatComponent} from './product-cat/product-cat.component';
import {HistoryComponent} from './history/history.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'process', component: ProcessComponent },
      { path: 'category', component: ProductCatComponent },
      { path: 'product', component: ProductDetailsComponent },
      { path: 'history', component: HistoryComponent }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
