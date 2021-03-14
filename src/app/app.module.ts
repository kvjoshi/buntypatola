import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { VimeModule } from '@vime/angular';
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

import { VideoComponent } from './admin/video/video.component';


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

    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    VimeModule,
    AdminRoutingModule,
    SiteRoutingModule,
    RouterModule.forRoot([
      { path: 'admin', component: AdminComponent },
      { path: '', component: SiteComponent }


    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
