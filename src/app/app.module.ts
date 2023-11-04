import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteHeaderComponent } from './components/website-header/website-header.component';
import { LoginComponent } from './components/login/login.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SerperateProdPageComponent } from './components/product-page/serperate-prod-page/serperate-prod-page.component';

@NgModule({
  declarations: [AppComponent, WebsiteHeaderComponent, LoginComponent, ProductPageComponent, AboutUsComponent, ContactUsComponent, SerperateProdPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
