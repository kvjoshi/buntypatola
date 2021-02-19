import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {ProductCatComponent} from './site/product-cat/product-cat.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './site/nav/nav.component';
import { FooterComponent } from './site/footer/footer.component';
import { HomePageComponent } from './site/home-page/home-page.component';
import { AboutUsComponent} from './site/about-us/about-us.component';
import { HistoryComponent } from './site/history/history.component';
import { ProcessComponent } from './site/process/process.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomePageComponent,
    AboutUsComponent,
    HistoryComponent,
    ProcessComponent,
    ProductCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'history', component: HistoryComponent },
      { path: 'process', component: ProcessComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
