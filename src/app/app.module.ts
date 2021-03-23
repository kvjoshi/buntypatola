import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductCatComponent } from './site/product-cat/product-cat.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './site/nav/nav.component';
import { FooterComponent } from './site/footer/footer.component';
import { HomePageComponent } from './site/home-page/home-page.component';
import { AboutUsComponent} from './site/about-us/about-us.component';
import { HistoryComponent } from './site/history/history.component';
import { ProcessComponent } from './site/process/process.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ProductDetailsComponent } from './site/product-details/product-details.component';
import { ContactUsComponent} from './site/contact-us/contact-us.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin/admin.routing.component';
import { SiteRoutingModule } from './site/site.routing.component';
import { SiteComponent } from './site/site.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { HttpClientModule } from '@angular/common/http';

import { VideoComponent } from './admin/video/video.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import {DataTablesModule} from 'angular-datatables';
import { TableCompComponent } from './admin/table-comp/table-comp.component';
import { SliderComponent } from './admin/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomePageComponent,
    AboutUsComponent,
    HistoryComponent,
    ProcessComponent,
    ProductCatComponent,
    ProductDetailsComponent,
    ContactUsComponent,
    AdminComponent,
    SiteComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    AdminCategoryComponent,
    AdminProductComponent,

    VideoComponent,

    AdminHeaderComponent,

    TableCompComponent,

    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    AdminRoutingModule,
    SiteRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'admin', component: AdminComponent },
      { path: '', component: SiteComponent }


        ]),
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        DataTablesModule
    ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
