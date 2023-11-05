import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WebsiteHeaderComponent } from './components/website-header/website-header.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SerperateProdPageComponent } from './components/product-page/serperate-prod-page/serperate-prod-page.component';
const routes: Routes = [
  { path: 'cart', component: LoginComponent },
  { path: 'main', component: WebsiteHeaderComponent },
  { path: 'product', component: ProductPageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: '', component: WebsiteHeaderComponent },
  {
    path: 'product/individualproduct/:id',
    component: SerperateProdPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
