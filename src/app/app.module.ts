import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    VimeModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'process', component: ProcessComponent },
      { path: 'product-detail', component: ProductDetailsComponent },
      { path: 'contact-us', component: ContactUsComponent }

    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
