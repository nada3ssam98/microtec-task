import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { FieldsComponent } from './fields/fields.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ServicesComponent } from './services/services.component';
import { TestmonialComponent } from './testmonial/testmonial.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'fields', component: FieldsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'testimonials', component: TestmonialComponent },
  { path: 'our-work', component: OurWorkComponent },
  {path:'testmonial', component:TestmonialComponent},
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
